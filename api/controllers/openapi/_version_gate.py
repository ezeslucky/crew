"""Version gate: reject outdated crewctl clients on /openapi/v1 with HTTP 426.

crewctl and the ``/openapi/v1`` surface ship in lockstep. A breaking path change
(resource-oriented paths) means an outdated crewctl would call removed paths and
get a bare 404; this gate returns ``426 Upgrade Required`` with an upgrade hint
instead.
"""

from __future__ import annotations

import re
from typing import Final

from flask import Blueprint, Response, request
from packaging.version import InvalidVersion, Version

from configs import crew_config
from controllers.openapi._errors import ErrorBody, OpenApiErrorCode

_UPGRADE_HINT: Final = "Upgrade crewctl: https://docs.crew.ai/en/cli/install"

# crewctl sends `User-Agent: crewctl/<semver> (<os>; <arch>; <channel>)`.
_CREWCTL_UA_RE = re.compile(r"^crewctl/(\d+\.\d+\.\d+(?:-[\w.]+)?)")

_PREFIX: Final = "/openapi/v1/"

# Paths a too-old client must still reach to discover that it is outdated.
_ALLOWLIST: Final = frozenset({"/openapi/v1/_version", "/openapi/v1/_health"})


def _upgrade_required_response(client_version: str, min_version: str) -> Response:
    body = ErrorBody(
        code=OpenApiErrorCode.UPGRADE_REQUIRED,
        message=f"crewctl {client_version} is no longer supported; upgrade to >= {min_version}.",
        status=426,
        hint=_UPGRADE_HINT,
    )
    return Response(body.model_dump_json(exclude_none=True), status=426, mimetype="application/json")


def attach_version_gate(bp: Blueprint) -> None:
    """Reject crewctl clients older than ``[tool.crew] min_crewctl_version`` with 426.

    Registered app-wide (``before_app_request``) rather than blueprint-scoped so it
    also fires for requests to *removed* paths — those no longer match an openapi
    route and would 404 before a blueprint-scoped ``before_request`` ever runs. The
    prefix guard scopes it back to ``/openapi/v1``. Fails open for non-crewctl or
    unparseable User-Agents (only a confidently-too-old crewctl is blocked).
    """

    @bp.before_app_request
    def _enforce_min_client_version() -> Response | None:  # pyright: ignore[reportUnusedFunction]
        if not request.path.startswith(_PREFIX):
            return None
        if request.path in _ALLOWLIST:
            return None
        match = _CREWCTL_UA_RE.match(request.headers.get("User-Agent", ""))
        if match is None:
            return None
        try:
            client_version = Version(match.group(1))
        except InvalidVersion:
            return None
        # Compare the numeric core (major.minor.patch) only — a pre-release build
        # like 0.2.0-rc.1 must not sort below the 0.2.0 floor.
        min_version = crew_config.tool.crew.min_crewctl_version
        if client_version.release[:3] < Version(min_version).release[:3]:
            return _upgrade_required_response(match.group(1), min_version)
        return None

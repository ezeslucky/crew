from __future__ import annotations

from typing import TYPE_CHECKING

from flask import Flask

if TYPE_CHECKING:
    from extensions.ext_login import CrewLoginManager


class CrewApp(Flask):
    """Flask application type with Crew-specific extension attributes."""

    login_manager: CrewLoginManager

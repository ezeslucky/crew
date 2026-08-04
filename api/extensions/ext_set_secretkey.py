from configs import crew_config
from configs.secret_key import resolve_secret_key
from crew_app import CrewApp


def init_app(app: CrewApp) -> None:
    """Resolve SECRET_KEY after config loading and before session/login setup."""
    secret_key = crew_config.SECRET_KEY
    if not secret_key:
        secret_key = resolve_secret_key(secret_key)
    crew_config.SECRET_KEY = secret_key
    app.config["SECRET_KEY"] = secret_key
    app.secret_key = secret_key

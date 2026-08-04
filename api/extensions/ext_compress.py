from configs import crew_config
from crew_app import CrewApp


def is_enabled() -> bool:
    return crew_config.API_COMPRESSION_ENABLED


def init_app(app: CrewApp):
    from flask_compress import Compress

    compress = Compress()
    compress.init_app(app)

from flask_orjson import OrjsonProvider

from crew_app import CrewApp


def init_app(app: CrewApp):
    """Initialize Flask-Orjson extension for faster JSON serialization"""
    app.json = OrjsonProvider(app)

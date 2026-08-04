from crew_app import CrewApp


def init_app(app: CrewApp):
    import flask_migrate

    from extensions.ext_database import db

    flask_migrate.Migrate(app, db)

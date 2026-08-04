from crew_app import CrewApp


def init_app(app: CrewApp):
    from events import event_handlers  # noqa: F401

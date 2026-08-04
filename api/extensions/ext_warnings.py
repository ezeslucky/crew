from crew_app import CrewApp


def init_app(app: CrewApp):
    import warnings

    warnings.simplefilter("ignore", ResourceWarning)

from core.hosting_configuration import HostingConfiguration

hosting_configuration = HostingConfiguration()


from crew_app import CrewApp


def init_app(app: CrewApp):
    hosting_configuration.init_app(app)

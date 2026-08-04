from core.extension.extension import Extension
from crew_app import CrewApp


def init_app(app: CrewApp):
    code_based_extension.init()


code_based_extension = Extension()

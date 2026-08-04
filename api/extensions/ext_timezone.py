import os
import time

from crew_app import CrewApp


def init_app(app: CrewApp):
    os.environ["TZ"] = "UTC"
    # windows platform not support tzset
    if hasattr(time, "tzset"):
        time.tzset()

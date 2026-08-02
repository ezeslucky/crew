import psycogreen.gevent as pscycogreen_gevent
from gevent import events as gevent_events
from grpc.experimental import gevent as grpc_gevent




def post_patch(event):
    # this function is only called for gevent worker.
    # from gevent docs (https://www.gevent.org/api/gevent.monkey.html):
    # You can also subscribe to the events to provide additional patching beyond what gevent distributes, either for
    # additional standard library modules, or for third-party packages. The suggested time to do this patching is in
    # the subscriber for gevent.events.GeventDidPatchBuiltinModulesEvent.
    if not isinstance(event, gevent_events.GeventDidPatchBuiltinModulesEvent):
        return
    # grpc gevent
    grpc_gevent.init_gevent()
    print("gRPC patched with gevent.", flush=True)  # noqa: T201
    pscycogreen_gevent.patch_psycopg()
    print("psycopg2 patched with gevent.", flush=True)  # noqa: T201


gevent_events.subscribers.append(post_patch)

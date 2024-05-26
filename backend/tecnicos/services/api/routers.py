from rest_framework.routers import DefaultRouter

from .api import ServiciesViewSet

router_services = DefaultRouter()

router_services.register(
  prefix='servicios', basename='servicios', viewset= ServiciesViewSet
)

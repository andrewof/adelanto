from rest_framework.routers import DefaultRouter

from django.urls import path

from .api import ServiciesViewSet, ClienteServicesListView, TecnicoServicesListView

router_services = DefaultRouter()

router_services.register(
  prefix='servicios', basename='servicios', viewset= ServiciesViewSet
)

urlpatterns = [
  path('servicios-cliente/', ClienteServicesListView.as_view(), name='servicios-cliente'),
  path('servicios-tecnico/', TecnicoServicesListView.as_view(), name='servicios-tecnico')
]
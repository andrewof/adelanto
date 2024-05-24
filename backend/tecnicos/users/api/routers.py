from rest_framework.routers import DefaultRouter
from .api import UserViewSet, UserView, CustomTokenObtainPairView, ClienteViewSet, TecnicoViewSet
from django.urls import path


router = DefaultRouter()


router.register(
  prefix='users', basename='users', viewset= UserViewSet
)
router.register(
  prefix='clientes', basename='clientes', viewset= ClienteViewSet
)
router.register(
  prefix='tecnicos', basename='tecnicos', viewset= TecnicoViewSet
)

urlpatterns = [
  path('auth/login/', CustomTokenObtainPairView.as_view()),
  path('auth/me/', UserView.as_view()),
]
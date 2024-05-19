from rest_framework.routers import DefaultRouter

from django.urls import path

from users.api.api import UserViewSet, UserView, ClienteViewSet, TecnicoViewSet, CustomTokenObtainPairView


router = DefaultRouter()

router.register(
  prefix= 'usuarios', basename='usuarios', viewset= UserViewSet
)
router.register(
  prefix= 'clientes', basename= 'clientes', viewset= ClienteViewSet
)
router.register(
  prefix= 'tecnicos', basename= 'tecnic', viewset= TecnicoViewSet
)


urlpatterns = [
  path('auth/login/', CustomTokenObtainPairView.as_view()),
  path('auth/me/', UserView.as_view()),
]
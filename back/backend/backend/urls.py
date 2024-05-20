from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi


from users.api.routers import router


schema_view = get_schema_view(
   openapi.Info(
      title="Documentación API",
      default_version='v1',
      description="Documentación",
      terms_of_service="",
      contact=openapi.Contact(email=""),
      license=openapi.License(name=""),
   ),
   public=True,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('doc/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path("api/", include('users.api.routers')),
    path('api/', include(router.urls)),
]

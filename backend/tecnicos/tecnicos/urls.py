from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

from users.api.routers import router
from services.api.routers import router_services

schema_view = get_schema_view(
   openapi.Info(
      title="Documentación API",
      default_version='v1',
      description="Documentación API",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
   path('admin/', admin.site.urls),
   path('doc/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
   path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
   path('api/', include(router.urls)),
   path('api/', include('users.api.routers')),
   path('api/', include(router_services.urls)),
   path('api/', include('services.api.routers'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
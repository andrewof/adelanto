from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Cliente, Tecnico

class CustomUserAdmin(BaseUserAdmin):
    # Sobrescribe el campo `list_display` para quitar `username`
    list_display = ('email', 'cedula', 'is_staff', 'is_active', 'is_superuser')
    # Sobrescribe el campo `fieldsets` para quitar `username`
    fieldsets = (
        (None, {'fields': ('email', 'password', 'cedula')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )
    # Sobrescribe el campo `add_fieldsets` para quitar `username`
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'cedula', 'is_staff', 'is_active', 'is_superuser')}
        ),
    )
    # Sobrescribe el campo `search_fields` para incluir `email` y `cedula`
    search_fields = ('email', 'cedula',)
    # Sobrescribe el campo `ordering` para ordenar por `email`
    ordering = ('email',)

# Registra los modelos y el admin personalizado
admin.site.register(User, CustomUserAdmin)
admin.site.register(Cliente, CustomUserAdmin)
admin.site.register(Tecnico, CustomUserAdmin)



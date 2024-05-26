# Generated by Django 5.0.4 on 2024-05-26 04:05

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0014_cliente_tecnico'),
    ]

    operations = [
        migrations.AddField(
            model_name='cliente',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cliente_profile', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='tecnico',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='tecnico_profile', to=settings.AUTH_USER_MODEL),
        ),
    ]

# Generated by Django 5.0.6 on 2024-05-26 20:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_alter_user_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='cedula',
            field=models.CharField(max_length=25, null=True, unique=True),
        ),
    ]
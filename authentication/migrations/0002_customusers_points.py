# Generated by Django 4.2.1 on 2023-08-11 14:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='customusers',
            name='points',
            field=models.PositiveBigIntegerField(default=0),
        ),
    ]
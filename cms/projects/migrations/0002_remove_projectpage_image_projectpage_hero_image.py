# Generated by Django 5.2.2 on 2025-06-06 14:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0001_initial'),
        ('wagtailimages', '0027_image_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='projectpage',
            name='image',
        ),
        migrations.AddField(
            model_name='projectpage',
            name='hero_image',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.PROTECT, related_name='+', to='wagtailimages.image'),
            preserve_default=False,
        ),
    ]

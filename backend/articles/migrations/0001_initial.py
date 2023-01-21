# Generated by Django 4.1.5 on 2023-01-13 09:57

import ckeditor.fields
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    operations = [
        migrations.CreateModel(
            name="Article",
            fields=[
                ("id", models.BigAutoField(primary_key=True, serialize=False)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("title", models.CharField(max_length=100)),
                ("content", ckeditor.fields.RichTextField()),
                (
                    "rating",
                    models.FloatField(
                        default=0.0,
                        validators=[
                            django.core.validators.MinValueValidator(limit_value=0.0),
                            django.core.validators.MaxValueValidator(limit_value=5.0),
                        ],
                    ),
                ),
                ("slug", models.SlugField(max_length=150, unique=True)),
                ("is_draft", models.BooleanField(default=False)),
                ("seo_keywords", models.CharField(max_length=255)),
                ("seo_description", models.TextField()),
            ],
            options={
                "verbose_name": "Статья",
                "verbose_name_plural": "Статьи",
            },
        ),
    ]
from wagtail.images.api.fields import ImageRenditionField
from wagtail.api.v2.serializers import PageSerializer

from rest_framework import serializers

from .models import ProjectPage


class ProjectPageSerializer(PageSerializer):
    hero_image = ImageRenditionField("fill-800x450")
    tags = serializers.SerializerMethodField()

    def get_tags(self, obj):
        return [tag.name for tag in obj.tags.all()]

    class Meta:
        model = ProjectPage
        fields = [
            "id",
            "title",
            "slug",
            "hero_image",
            "tags",
            "description",
            "external_link",
        ]

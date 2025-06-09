from django.urls import path
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from wagtail.api.v2.views import PagesAPIViewSet
from wagtail.images.api.fields import ImageRenditionField

from projects.models import ProjectPage


class ProjectPageSerializer(serializers.ModelSerializer):
    """
    Define a serializer for help convert Images into something compatible with JSON API
    """

    hero_image = ImageRenditionField("original")

    class Meta:
        model = ProjectPage
        fields = [
            "id",
            "title",
            "slug",
            "description",
            "hero_image",
            "external_link",
            "tags",
            "content",
        ]


class ProjectsAPIViewSet(PagesAPIViewSet):
    """
    Custom API viewset to get project information using slug
    """

    model = ProjectPage
    serializer_class = ProjectPageSerializer

    @classmethod
    def get_listing_default_fields(cls, model):
        """
        Override to include hero_image in the listing view
        """
        return [
            "id",
            "title",
            "slug",
            "description",
            "hero_image",
            "external_link",
            "tags",
        ]

    @classmethod
    def get_urlpatterns(cls):
        """
        Override parent functions to add custom endpoints like project list and slug
        """

        return [
            path("", cls.as_view({"get": "listing_view"}), name="listing"),
            path(
                "<str:pk>/", cls.as_view({"get": "detail_view"}), name="detail"
            ),  # add custom route for slug
        ]

    def get_object(self):
        lookup_value = self.kwargs.get(self.lookup_field)
        queryset = self.filter_queryset(self.get_queryset())
        return get_object_or_404(queryset, slug=lookup_value)

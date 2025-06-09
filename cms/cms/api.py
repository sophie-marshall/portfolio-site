"""
Create separate API modules for the CMS apps to help keep things organized
"""

from wagtail.api.v2.router import WagtailAPIRouter

from projects.api import ProjectsAPIViewSet


api_router = WagtailAPIRouter("wagtailapi")


api_router.register_endpoint("projects", ProjectsAPIViewSet)

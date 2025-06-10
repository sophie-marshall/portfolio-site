from django.db import models

from wagtail.models import Page
from wagtail.fields import StreamField
from wagtail.admin.panels import FieldPanel
from wagtail.images.blocks import ImageChooserBlock
from wagtail.blocks import RichTextBlock, StructBlock, ChoiceBlock
from wagtail.api import APIField
from wagtail.images.api.fields import ImageRenditionField

from taggit.models import TaggedItemBase

from modelcluster.fields import ParentalKey
from modelcluster.tags import ClusterTaggableManager


class ContentBlock(StructBlock):
    type = ChoiceBlock(choices=[("text", "Text"), ("image", "Image")], required=True)
    text = RichTextBlock(
        features=["h2", "h3", "bold", "italic", "ul", "ol", "link"], required=False
    )
    image = ImageChooserBlock(required=False)

    class Meta:
        icon = "doc-full"
        label = "Content Block"


class ProjectPageTag(TaggedItemBase):
    content_object = ParentalKey(
        "ProjectPage",
        related_name="tagged_items",
        on_delete=models.CASCADE,
    )


class ProjectsIndexPage(Page):
    """
    Model that will help organize projects on the portfolio site. All projects will be a child of this index page
    """

    api_fields = [
        APIField("title"),
        APIField("hero_image"),
        APIField("tags"),
    ]

    # define the type of pages that can be created as children of this index -- in this case our ProjectPage model
    subpage_types = ["projects.ProjectPage"]

    # override default context -- only return CHILDREN of this index that are LIVE
    def get_context(self, request):
        context = super().get_context(request)
        context["projects"] = ProjectPage.objects.child_of(self).live()
        return context


class ProjectPage(Page):
    """
    The model for an individual project page
    """

    ### --- PROJECT FIELDS/ATTRIBUTES --- ###
    description = models.TextField()  # short description for the project
    hero_image = models.ForeignKey(
        "wagtailimages.Image",
        null=False,  # set hero image to be required
        blank=False,
        on_delete=models.PROTECT,  # ensure if image is in use it cant be delted
        related_name="+",
    )
    external_link = models.URLField(blank=True, null=True)
    tags = ClusterTaggableManager(
        through=ProjectPageTag,  # use our custom tag model
        blank=True,  # allow no tags
    )
    content = StreamField(
        [("block", ContentBlock())], use_json_field=True
    )  # create a content block that pulls from our custom StructBlock defined above

    ### --- PAGE TREE DEFINITION --- ###
    parent_page_types = ["projects.ProjectsIndexPage"]  # parent must be the index page
    subpage_types = []  # no children allowed

    ### --- ADMIN INTERFACE DEFINITION --- ###
    content_panels = Page.content_panels + [
        FieldPanel("description"),
        FieldPanel("hero_image"),
        FieldPanel("external_link"),
        FieldPanel("tags"),
        FieldPanel("content"),
    ]

    ### --- API DEFINITION --- ###
    api_fields = [
        APIField("description"),
        APIField(
            "hero_image",
            serializer=ImageRenditionField("original"),
        ),
        APIField("external_link"),
        APIField("tags"),
        APIField("content"),
    ]

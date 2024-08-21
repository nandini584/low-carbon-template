from django.db import models

from wagtail.images.models import Image, AbstractImage, AbstractRendition
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.search import index

class HomePage(Page):
    heading = models.CharField(max_length=255, default="Sustainable Development")
    introduction = RichTextField(blank=True)
    # body = ListBlock(blank=True)

    search_fields = Page.search_fields + [
        index.SearchField('heading'),
        index.SearchField('introduction'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('heading', help_text='The page title as you\'d like it to be seen by the public'),
        FieldPanel('introduction')
    ]

from django.db import models

from wagtail.images.models import Image, AbstractImage, AbstractRendition
from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.search import index

class HomePage(Page):
    introduction = RichTextField()
    # body = ListBlock(blank=True)

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('introduction')
    ]

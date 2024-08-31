from django.db import models

from wagtail.images.models import Image, AbstractImage, AbstractRendition
from wagtail.models import Page
from wagtail.fields import RichTextField, StreamField
from wagtail.admin.panels import FieldPanel
from wagtail.search import index

from wagtail import blocks
from wagtail.images.blocks import ImageChooserBlock
from wagtail.blocks import PageChooserBlock
from wagtail.api import APIField

class HomePage(Page):
    introduction = RichTextField()
    body = StreamField([
        ('heading', blocks.CharBlock(form_classname="title")),
        ('description', blocks.RichTextBlock()),
        ('image', ImageChooserBlock()),
        ('link', PageChooserBlock()),
        ('link_text', blocks.CharBlock())
    ], blank=True)

    api_fields = [
        APIField('introduction'),
        APIField('body')
    ]

    search_fields = Page.search_fields + [
        index.SearchField('introduction'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('introduction'),
        FieldPanel('body'),
    ]

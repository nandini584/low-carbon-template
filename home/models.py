from wagtail import blocks
from wagtail.admin.panels import FieldPanel
from wagtail.api import APIField
from wagtail.blocks import PageChooserBlock
from wagtail.fields import RichTextField, StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page
from wagtail.search import index
from wagtail_headless_preview.models import HeadlessMixin


class HomePage(HeadlessMixin, Page):
    max_count = 1

    introduction = RichTextField()
    body = StreamField(
        [
            (
                "section",
                blocks.StructBlock(
                    [
                        ("heading", blocks.CharBlock(form_classname="title")),
                        ("description", blocks.RichTextBlock()),
                        ("image", ImageChooserBlock()),
                        ("link", PageChooserBlock()),
                        ("link_text", blocks.CharBlock()),
                    ]
                ),
            ),
        ],
        blank=True,
    )

    api_fields = [APIField("introduction"), APIField("body")]

    search_fields = Page.search_fields + [
        index.SearchField("introduction"),
    ]

    content_panels = Page.content_panels + [
        FieldPanel("introduction"),
        FieldPanel("body"),
    ]

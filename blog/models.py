from django.db import models

from wagtail.models import Page
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.search import index


class BlogIndexPage(Page):
    main_title = models.CharField(max_length=255, default="Sustainable Development")

    content_panels = Page.content_panels + [
        FieldPanel('main_title', help_text="The page title as you'd like it to be seen by the public")
    ]

    # Only allow BlogPages beneath this page.
    subpage_types = ["blog.BlogPage"]


class BlogPage(Page):
    # Different from the real publication date, for editorial control.
    blog_title = models.CharField(max_length=255, default="Sustainable Development")
    date = models.DateField("Post date")
    introduction = RichTextField(max_length=250)
    # body = RichTextField(blank=True)

    search_fields = Page.search_fields + [
        index.SearchField('blog_title'),
        index.SearchField('introduction'),
        # index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('blog_title', help_text="The page title as you'd like it to be seen by the public"),
        FieldPanel('date', help_text="This date will be shown on pages"),
        FieldPanel('introduction'),
        # FieldPanel('body'),
    ]

    # Only allow this page to be created beneath a BlogIndexPage.
    parent_page_types = ["blog.BlogIndexPage"]
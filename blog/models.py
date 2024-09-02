from django.db import models
from rest_framework import serializers
from wagtail import blocks
from wagtail.admin.panels import FieldPanel, MultiFieldPanel
from wagtail.api import APIField
from wagtail.fields import RichTextField, StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.models import Page
from wagtail.search import index
from wagtail.snippets.models import register_snippet
from wagtail_headless_preview.models import HeadlessMixin


@register_snippet
class Author(models.Model):
    name = models.CharField(max_length=255)

    panels = [
        FieldPanel("name"),
    ]

    def __str__(self):
        return self.name


@register_snippet
class Category(models.Model):
    name = models.CharField(max_length=255)

    panels = [
        FieldPanel("name"),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "categories"


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ["name"]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name"]


class BlogIndexPage(HeadlessMixin, Page):
    parent_page_types = ["home.HomePage"]
    subpage_types = ["blog.BlogPage"]
    max_count = 1


class BlogPage(HeadlessMixin, Page):
    parent_page_types = ["blog.BlogIndexPage"]

    publication_date = models.DateField("Post date")
    introduction = RichTextField()
    author = models.ForeignKey(
        "blog.Author",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )
    category = models.ForeignKey(
        "blog.Category",
        null=True,
        on_delete=models.SET_NULL,
        related_name="+",
    )

    body = StreamField(
        [
            ("image", ImageChooserBlock()),
            ("paragraph", blocks.RichTextBlock()),
        ]
    )

    api_fields = [
        APIField("publication_date"),
        APIField("introduction"),
        APIField("author", serializer=AuthorSerializer()),
        APIField("category", serializer=CategorySerializer()),
        APIField("body"),
    ]

    search_fields = Page.search_fields + [
        index.SearchField("introduction"),
        index.SearchField("body"),
    ]

    content_panels = Page.content_panels + [
        MultiFieldPanel(
            [
                FieldPanel("publication_date"),
                FieldPanel("author"),
                FieldPanel("category"),
            ],
            heading="Blog information",
        ),
        FieldPanel("introduction"),
        FieldPanel("body"),
    ]

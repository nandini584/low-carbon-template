from django import forms
from django.db import models

from modelcluster.fields import ParentalKey, ParentalManyToManyField
from wagtail.models import Page, Orderable
from wagtail.fields import RichTextField, StreamField
from wagtail.admin.panels import FieldPanel, InlinePanel, MultiFieldPanel
from wagtail.search import index
from wagtail import blocks
from modelcluster.contrib.taggit import ClusterTaggableManager
from taggit.models import TaggedItemBase
from wagtail.snippets.models import register_snippet
from wagtail.images.blocks import ImageChooserBlock

class BlogIndexPage(Page):
    main_title = models.CharField(max_length=255, default="Sustainable Development")

    content_panels = Page.content_panels + [
        FieldPanel('main_title', help_text="The page title as you'd like it to be seen by the public")
    ]

    subpage_types = ["blog.BlogPage"]

class BlogPageTag(TaggedItemBase):
    content_object = ParentalKey(
        'BlogPage',
        related_name='tagged_items',
        on_delete=models.CASCADE
    )

class BlogPage(Page):
    # Different from the real publication date, for editorial control.
    blog_title = models.CharField(max_length=255, default="Sustainable Development")
    date = models.DateField("Post date")
    introduction = RichTextField(max_length=250)
    # body = RichTextField(blank=True)
    authors = ParentalManyToManyField('blog.Author', blank=True)

    body = StreamField([
        ('image', ImageChooserBlock()),
        ('paragraph', blocks.RichTextBlock(max_length=255)),
    ], default=[("body","default")])

    tags = ClusterTaggableManager(through=BlogPageTag, blank=True)

    def main_image(self):
        gallery_item = self.gallery_images.first()
        if gallery_item:
            return gallery_item.image
        else:
            return None
    
    search_fields = Page.search_fields + [
        index.SearchField('blog_title'),
        index.SearchField('introduction'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        MultiFieldPanel([
            FieldPanel('date'),
            FieldPanel('authors', widget=forms.CheckboxSelectMultiple),
            FieldPanel('tags')
        ], heading="Blog information"),
        FieldPanel('blog_title', help_text="The page title as you'd like it to be seen by the public"),
        FieldPanel('introduction'),
        FieldPanel('body'),

        InlinePanel('gallery_images', label="Gallery images"),
    ]

    parent_page_types = ["blog.BlogIndexPage"]


class BlogPageGalleryImage(Orderable):
    page = ParentalKey(BlogPage, on_delete=models.CASCADE, related_name='gallery_images')
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
    )
    caption = models.CharField(blank=True, max_length=250)

    panels = [
        FieldPanel('image'),
        FieldPanel('caption'),
    ]

@register_snippet
class Author(models.Model):
    name = models.CharField(max_length=255)

    panels = [
        FieldPanel('name'),
    ]

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Authors'

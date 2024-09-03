# Demo site

Delete this folder when setting up a new site with our template

## Demo data

To load the demo data, use:

```bash
./manage.py shell -c "from wagtail.models import Page, Site; Site.objects.get(hostname='localhost').delete(); Page.objects.get(title='Welcome to your new Wagtail site!').delete()"
./manage.py loaddata demo/fixtures.json
```

To save new demo data, use:

```bash
./manage.py dumpdata --natural-foreign --indent 2 -e auth.permission -e contenttypes -e wagtailcore.GroupCollectionPermission -e wagtailimages.rendition -e sessions -e wagtailsearch.indexentry -e wagtailsearch.sqliteftsindexentry -e wagtailcore.referenceindex -e wagtailcore.pagesubscription -e wagtail_headless_preview.pagepreview -e wagtailcore.pagelogentry -e wagtailcore.modellogentry > demo/fixtures.json
```

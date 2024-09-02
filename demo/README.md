# Demo site

Delete this folder when setting up a new site with our template

## Demo data

To load the demo data, use:

To save new demo data, use:

```bash
./manage.py dumpdata --natural-foreign --indent 2 -e auth.permission -e contenttypes -e wagtailcore.GroupCollectionPermission -e wagtailimages.rendition -e sessions -e wagtailsearch.indexentry -e wagtailsearch.sqliteftsindexentry -e wagtailcore.referenceindex -e wagtailcore.pagesubscription -e wagtail_headless_preview.pagepreview -e wagtailcore.pagelogentry -e wagtailcore.modellogentry > demo/fixtures.json
```

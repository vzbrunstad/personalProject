from django.contrib import admin

from draft_kit_app.models import *


# from craigslist_app.models import Category, Post
admin.site.register(Drafter)
admin.site.register(League)
admin.site.register(Team)
admin.site.register(Player)
admin.site.register(Composition)
admin.site.register(Roster)

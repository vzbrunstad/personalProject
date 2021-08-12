## wines/urls.py
from django.urls import path, include
from .views import * # This library gives us all of the functions usually found in views.py
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'player', PlayerViewSet, basename='player')
router.register(r'league', LeagueViewSet, basename='league')


urlpatterns = router.urls
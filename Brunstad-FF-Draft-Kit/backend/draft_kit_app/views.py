## wines/views.py
from .models import Player
from .serializers import *
from rest_framework import viewsets


class PlayerViewSet(viewsets.ModelViewSet):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class LeagueViewSet(viewsets.ModelViewSet):

    queryset = League.objects.all()
    serializer_class = LeagueSerializer



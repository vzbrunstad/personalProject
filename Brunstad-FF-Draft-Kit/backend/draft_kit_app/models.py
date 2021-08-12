from django.db import models
from django.utils import timezone
from django.db.models.deletion import CASCADE

class Drafter(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Composition(models.Model):
    name = models.CharField(max_length=255)
    QB = models.IntegerField()
    RB = models.IntegerField()
    WR = models.IntegerField()
    TE = models.IntegerField()
    DEF = models.IntegerField()
    K = models.IntegerField()

    def __str__(self):
        return self.name

class League(models.Model):
    name = models.CharField(max_length=255)
    draft_type = models.CharField(max_length=255)
    number_of_teams = models.IntegerField()
    scoring = models.CharField(max_length=255)
    team_composition = models.ForeignKey(Composition, on_delete=CASCADE, related_name='league_composition')

    def __str__(self):
        return self.name

class Team(models.Model):
    name = models.CharField(max_length=255)
    league = models.ForeignKey(League, on_delete=CASCADE, related_name='team_league')
    draft_position = models.CharField(max_length=255)

    

    def __str__(self):
        return self.name

class Player(models.Model):
    name = models.CharField(max_length=255)
    team = models.ForeignKey(Team, on_delete=CASCADE, related_name='player_team')
    stats = models.IntegerField()
    height = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Roster(models.Model):
    drafter = models.ForeignKey(Drafter, on_delete=CASCADE, related_name='roster_drafter')
    league = models.ForeignKey(League, on_delete=CASCADE, related_name='roster_league')
    


    def __str__(self):
        return self.drafter

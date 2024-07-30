from django.db import models
from user_app.models import AppUser


# Create your models here.
class Task(models.Model):
    title = models.CharField()
    completed = models.BooleanField(default=False)
    user = models.ForeignKey(AppUser, on_delete=models.CASCADE, related_name="tasks")

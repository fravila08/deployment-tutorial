from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class AppUser(AbstractUser):
    email = models.EmailField(unique=True, null=False, blank=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

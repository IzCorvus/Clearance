from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.
class Account(models.Model):
    username = models.CharField(max_length=200)
    id = models.AutoField(primary_key=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=200)
    date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.username
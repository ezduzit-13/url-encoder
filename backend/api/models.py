from django.db import models

class Url(models.Model):
    long_url = models.CharField(max_length=500,unique=True)
    url_id = models.CharField(max_length=7,unique=True)


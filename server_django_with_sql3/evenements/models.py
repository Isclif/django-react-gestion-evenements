from django.db import models

# Create your models here.

class evenement(models.Model):
    libele = models.CharField(max_length=150, null=False, blank=False)
    lieu = models.CharField(max_length=150, null=False, blank=False)
    description = models.TextField()
    logo = models.ImageField(upload_to='uploads/images', null=False, blank=False)
    debut = models.DateField(auto_now_add=False)
    fin = models.DateField(auto_now_add=False)
    categorie = models.CharField(max_length=150, null=False, blank=False)
    proprietaire = models.CharField(max_length=150, null=False, blank=False)

    def __str__(self):
        return self.libele


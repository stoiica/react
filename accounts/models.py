from django.db import models

# Create your models here.


class Utilizator(models.Model):
    id_utilizator = models.AutoField(primary_key=True)
    nume_utilizator = models.CharField(max_length=20)
    prenume_utilizator = models.CharField(max_length=20)
    tara_utilizator = models.CharField(max_length=20, blank=True, null=True)
    oras_utilizator = models.CharField(max_length=20, blank=True, null=True)
    email_utilizator = models.CharField(max_length=30, blank=True, null=True)
    telefon_utilizator = models.CharField(max_length=20, blank=True, null=True)
    username = models.CharField(unique=True, max_length=20)
    password = models.CharField(max_length=20)
    status = models.CharField(max_length=30, blank=True, null=True)

    class Meta:
        db_table = 'utilizator'


class RezervareTot(models.Model):
    nume = models.CharField(max_length=30, blank=True, null=True)
    prenume = models.CharField(max_length=30, blank=True, null=True)
    email = models.CharField(max_length=40, blank=True, null=True)
    oras = models.CharField(max_length=40, blank=True, null=True)
    telefon = models.CharField(max_length=40, blank=True, null=True)
    statut = models.CharField(max_length=40, blank=True, null=True)
    id_transport = models.IntegerField(blank=True, null=True)
    id_masa = models.IntegerField(blank=True, null=True)
    numar_persoane = models.IntegerField(blank=True, null=True)
    id_agentie = models.IntegerField(blank=True, null=True)

    class Meta:

        db_table = 'rezervare_tot'

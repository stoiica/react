from django.db import models


class Imagini(models.Model):
    tara = models.CharField(max_length=30, blank=True, null=True)
    oras = models.CharField(max_length=30)
    descriere = models.CharField(max_length=255, blank=True, null=True)
    url = models.CharField(max_length=255)

    class Meta:
        db_table = 'imagini'


class Autocar(models.Model):
    id_autocar = models.AutoField(primary_key=True)
    nume_autocar = models.CharField(max_length=20)
    locuri_totale = models.IntegerField()
    locuri_disponibile = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'autocar'


class LocatiiAutocar(models.Model):
    oras = models.CharField(max_length=20)
    statut = models.CharField(max_length=20)
    masa = models.CharField(max_length=20)
    tip_transport = models.CharField(max_length=20)


class PretAutocar(models.Model):
    pret = models.IntegerField(blank=True, null=True)


class Conditii(models.Model):
    oras = models.CharField(max_length=20)
    tip_transport = models.CharField(max_length=20)


class MasaSiTransport(models.Model):
    oras = models.CharField(max_length=20)
    tip_transport = models.CharField(max_length=20)
    masa = models.CharField(max_length=20)


class ChangePassword(models.Model):
    token = models.CharField(max_length=255)
    password = models.CharField(max_length=255)


class DeleteOrder(models.Model):
    token = models.CharField(max_length=255)


class RatingBorder(models.Model):
    rating = models.CharField(max_length=255)

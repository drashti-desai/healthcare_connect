from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    admin_field = models.CharField(max_length=50, blank=True, null=True)
    age = models.IntegerField(blank=True, null=True)
    contact = models.CharField(max_length=15, blank=True, null=True)
    dob = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=10, blank=True, null=True)

class Receptionist(User):
   patients = models.ManyToManyField('Patient', related_name='receptionists')

class Patient(User):
    pass

User._meta.get_field('groups').remote_field.related_name = 'user_groups'
User._meta.get_field('user_permissions').remote_field.related_name = 'user_permissions'
from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, Group, Permission



class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    USER_TYPE_CHOICES = [
        ('admin', 'Admin'),
        ('patient', 'Patient'),
    ]

    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES, default='patient')

    objects = CustomUserManager()
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    @property
    def is_admin(self):
        return self.user_type == 'admin'

    @is_admin.setter
    def is_admin(self, value):
        self.user_type = 'admin' if value else 'patient'

    @property
    def is_patient(self):
        return self.user_type == 'patient'

    @is_patient.setter
    def is_patient(self, value):
        self.user_type = 'patient' if value else 'admin'

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username
    

class UserProfile(models.Model):
    user = models.OneToOneField('CustomUser', on_delete=models.CASCADE)
    groups = models.ManyToManyField(Group)
    user_permissions = models.ManyToManyField(Permission)

    class Meta:
        abstract = True

class admin(UserProfile):

    def save(self, *args, **kwargs):
        self.user.is_examiner = True
        self.user.is_examinee = False
        super().save(*args, **kwargs)

    def __str__(self):
        return self.user.username

class Patient(UserProfile):
    gender = models.CharField(max_length=10)
    age = models.PositiveIntegerField()
    contact = models.CharField(max_length=20)
    dob = models.DateField()
    

    def save(self, *args, **kwargs):
        self.user.is_examiner = False
        self.user.is_examinee = True
        super().save(*args, **kwargs)

    def __str__(self):
        return self.user.username


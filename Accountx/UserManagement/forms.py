from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import CustomUser, admin,Patient

class adminRegistrationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password1', 'password2', 'first_name', 'last_name']
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.user_type = 'examiner'
        if commit:
            user.save()
            examiner = admin.objects.create(user=user)
        return user

class adminLoginForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'password']

class patientRegistrationForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password1', 'password2', 'first_name', 'last_name']
    
    def save(self, commit=True):
        user = super().save(commit=False)
        user.user_type = 'examinee'
        if commit:
            user.save()
            examinee = Patient.objects.create(user=user)
        return user

class patientLoginForm(AuthenticationForm):
    class Meta:
        model = CustomUser
        fields = ['username', 'password']
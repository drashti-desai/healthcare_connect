# healthcare/forms.py
from django import forms
from .models import Receptionist, Patient

class ReceptionistRegistrationForm(forms.ModelForm):
    class Meta:
        model = Receptionist
        fields = ['first_name','last_name','username', 'password']

class PatientRegistrationForm(forms.ModelForm):
    class Meta:
        model = Patient
        fields = ['first_name','last_name','username', 'password', 'age', 'contact', 'dob', 'gender']

    # Exclude last_login field
    exclude = ['last_login']    



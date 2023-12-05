# healthcare/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from .forms import ReceptionistRegistrationForm, PatientRegistrationForm
from .factory import UserFactory
from .composite import IndividualPatient, PatientGroup
from django.http import HttpResponse
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from .models import Receptionist,Patient
from django.shortcuts import render, get_object_or_404

def admin_dashboard(request, receptionist_id):
    receptionist = get_object_or_404(Receptionist, id=receptionist_id)

    if request.method == 'POST':
        # If a patient ID is provided in the POST request, fetch that specific patient
        patient_id = request.POST.get('patient_id')
        if patient_id:
            patient = get_object_or_404(Patient, id=patient_id)
            patient_component = IndividualPatient(patient)
            return render(request, 'admin_dashboard.html', {'receptionist': receptionist, 'patient_data': [patient_component.display_info()]})

    # If no patient ID is provided or it's not a POST request, display the regular patient list
    patients = receptionist.patients.all()
    patient_group = PatientGroup([IndividualPatient(patient) for patient in patients])

    return render(request, 'admin_dashboard.html', {'receptionist': receptionist, 'patient_data': patient_group.display_info()})

def patient_dashboard(request, patient_id):
    patient = get_object_or_404(Patient, id=patient_id)
    return render(request, 'patient_dashboard.html', {'patient': patient})

def register_user(request, user_type):
    form_class = ReceptionistRegistrationForm if user_type == 'receptionist' else PatientRegistrationForm

    if request.method == 'POST':
        form = form_class(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            user = UserFactory.create_user(user_type, data)
            login(request, user)
            if user_type == 'receptionist':
                # Assuming you have a way to get the receptionist_id for the newly registered receptionist
                receptionist_id = user.receptionist.user_ptr_id  # Replace this with the actual way you get the receptionist_id
                return redirect('receptionist_dashboard', receptionist_id=receptionist_id)
            elif user_type == 'patient':
                patient_id = user.patient.user_ptr_id  # Replace this with the actual way you get the receptionist_id
                return redirect('patient_dashboard', patient_id=patient_id)
    else:
        form = form_class()
    
    return render(request, 'custom_register.html', {'form': form, 'user_type': user_type})


#from .forms import LoginForm  # Import your log
def authenticate_user(request):
    if request.method == 'POST':
        # Handle the POST request for authentication
        username = request.POST.get('username')
        password = request.POST.get('password')
        user_type = request.POST.get('user_type')
        print(f"Received data - username: {username}, password: {password}, user_type: {user_type}")

        if username is not None and password is not None:
            user = authenticate(request, username=username, password=password)

            if user:
                login(request, user)
                if user_type == 'admin':
                    return redirect('admin_dashboard')
                elif user_type == 'patient':
                    return redirect('patient_dashboard')

    else:
        # Handle the GET request to display the login form
        
        
        #form = LoginForm()  # Create an instance of your login form
        return render(request, 'custom_login.html')

    return HttpResponse("Login failed. Handle the case when login fails.")


def patient_logout(request):
    logout(request)

    # Redirect to a patient-specific logout success page or homepage
    return redirect('custom_login')  # Replace 'patient_home' with the actual URL name for patient home

def admin_logout(request):
    logout(request)
    # Redirect to an admin-specific logout success page or homepage
    return redirect('custom_login')  # Replace 'admin_home' 





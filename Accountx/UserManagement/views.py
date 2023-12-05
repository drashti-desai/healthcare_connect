# views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login,logout
from django.contrib.auth.decorators import login_required
from .forms import adminRegistrationForm, patientRegistrationForm
from django.contrib import messages

def index(request):
    return render(request, 'base.html')

def admin_Registration(request):
    if request.method == 'POST':
        form = adminRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_admin = True
            user.save()
            return redirect('admin_login')  # Change to the admin login URL
    else:
        form = adminRegistrationForm()
    return render(request, 'admin_register.html', {'form': form})

def patient_registration(request):
    if request.method == 'POST':
        form = patientRegistrationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_patient = True
            user.save()
            return redirect('patient_login')  # Change to the patient login URL
    else:
        form = patientRegistrationForm()
    return render(request, 'patient_register.html', {'form': form})

def custom_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, email=email, password=password)
        if user is not None:
            login(request, user)
            if user.is_admin:
                return redirect('admin_dashboard')
            elif user.is_patient:
                return redirect('patient_dashboard')
        else:
            messages.error(request, 'Invalid login credentials.')

    return render(request, 'custom_login.html')

@login_required
def admin_dashboard(request):
    return render(request, 'admin_dashboard.html')

@login_required
def patient_dashboard(request):
    return render(request, 'patient_dashboard.html')

def admin_logout(request):
    logout(request)
    return redirect('custom_login') 

def patient_logout(request):
    logout(request)
    return redirect('custom_login')


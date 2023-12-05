# healthcare/urls.py
from django.urls import path
from .views import register_user, authenticate_user, admin_dashboard, patient_dashboard,patient_logout,admin_logout

urlpatterns = [
    path('<str:user_type>/register/', register_user, name='register_user'),
    path('login/', authenticate_user, name='custom_login'),
    path('receptionist/dashboard/<int:receptionist_id>/', admin_dashboard, name='receptionist_dashboard'),
    path('patient/dashboard/<int:patient_id>/', patient_dashboard, name='patient_dashboard'),
    path('patient/logout/', patient_logout, name='patient_logout'),
    path('receptionist/logout/', admin_logout, name='admin_logout'),
    # Add more URLs for other views as needed
]
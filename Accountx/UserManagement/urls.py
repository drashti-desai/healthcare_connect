from django.urls import path
from .views import index,custom_login,admin_Registration,admin_dashboard,patient_registration,patient_dashboard,patient_logout,admin_logout

urlpatterns = [

    path('', index, name='base'),
    path('admin/register/', admin_Registration, name='admin_Register'),
    path('login/', custom_login, name='custom_login'),
    path('admin/dashboard/', admin_dashboard, name='examiner_dashboard'),

    path('patient/register/', patient_registration, name='patient_register'),
    path('patient/dashboard/', patient_dashboard, name='patient_dashboard'),
    path('patient/logout/', patient_logout, name='patient_logout'),
    path('admin/logout/', admin_logout, name='admin_logout'),
]
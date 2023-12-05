# composite.py
from abc import ABC, abstractmethod

# Component interface
class PatientComponent(ABC):
    @abstractmethod
    def display_info(self):
        pass

# Leaf class representing an individual patient
class IndividualPatient(PatientComponent):
    def __init__(self, patient):
        self.patient = patient

    def display_info(self):
        return {
            'patient': self.patient,
            'user_data': {
                'age': self.patient.age,
                'contact': self.patient.contact,
                'dob': self.patient.dob,
                'gender': self.patient.gender,
            }
        }

# Composite class representing a group of patients
class PatientGroup(PatientComponent):
    def __init__(self, patients):
        self.patients = patients

    def add_patient(self, patient):
        self.patients.append(IndividualPatient(patient))

    def display_info(self):
        return [patient.display_info() for patient in self.patients]

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Bookappointment(){
  const [appointmentData, setAppointmentData] = useState({
    firstName: '',
    middleInitial: '',
    lastName: '',
    birthDate: '',
    phone: '',
    firstVisit: false,
    appointmentDate: '',
    appointmentTime: '',
    preferredPhysician: '',
    visitReason: '',
  });

  // An array of physicians to loop over
  const physicians = [
    { id: 'drAnderson', name: 'Dr. Anderson' },
    { id: 'drJones', name: 'Dr. Jones' },
    { id: 'drPatel', name: 'Dr. Patel' },
    { id: 'drSmith', name: 'Dr. Smith' },
    { id: 'noPreference', name: 'No preference' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData({ ...appointmentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission to server or state management
    console.log(appointmentData);
  };

  return (
    <div className="container mt-5">
      <h1>Family Medicine - Patient Information</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name *</label>
          <input type="text" className="form-control" name="firstName" required onChange={handleChange} />
        </div>

        {/* Add the rest of the input fields similarly */}

        <div className="mb-3">
          <label htmlFor="birthDate" className="form-label">Birth Date *</label>
          <input type="date" className="form-control" name="birthDate" required onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label">Appointment Date *</label>
          <input type="date" className="form-control" name="appointmentDate" required onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="appointmentTime" className="form-label">Time *</label>
          <input type="time" className="form-control" name="appointmentTime" required onChange={handleChange} />
        </div>


        <div className="mb-3">
          <label>Preferred Physician</label>
          <div>
            {physicians.map((physician) => (
              <React.Fragment key={physician.id}>
                <input
                  type="radio"
                  className="btn-check"
                  name="preferredPhysician"
                  id={physician.id}
                  value={physician.name}
                  onChange={handleChange}
                  checked={appointmentData.preferredPhysician === physician.name}
                />
                <label className="btn btn-outline-primary" htmlFor={physician.id}>
                  {physician.name}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="visitReason" className="form-label">Please describe the reason for this visit *</label>
          <textarea className="form-control" name="visitReason" rows="3" required onChange={handleChange}></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Bookappointment;
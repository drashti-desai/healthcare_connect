import React from "react";

function profile() {
    return (
        <div className="container mt-5">
          <h2>Patient Profile Form</h2>
          <form>
            <div className="row mb-3">
              <div className="col">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="mb-3">
              <input type="tel" className="form-control" placeholder="Phone number" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Home address" />
            </div>
            <div className="mb-3">
              <select className="form-select" aria-label="Gender">
                <option selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <input type="date" className="form-control" placeholder="Date of Birth" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Birth place" />
            </div>
            <div className="mb-3">
              <input type="number" className="form-control" placeholder="Age" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Blood group" />
            </div>
            <div className="mb-3">
              <label>Allergies:</label>
              {['foods', 'animals', 'pollen', 'mold', 'dust mites', 'medications', 'latex', 'insect stings', 'cockroaches', 'perfumes/household chemicals'].map((allergy) => (
                <div key={allergy} className="form-check">
                  <input className="form-check-input" type="checkbox" value={allergy} id={`allergy-${allergy}`} />
                  <label className="form-check-label" htmlFor={`allergy-${allergy}`}>
                    {allergy.charAt(0).toUpperCase() + allergy.slice(1)}
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Disability" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Current diagnosis" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder="Current medication details" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      );
}

export default profile;
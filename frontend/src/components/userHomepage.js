import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const AppointmentItem = ({ hospitalName, disease, date, time }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{hospitalName}</h5>
            <p className="card-text">{disease}</p>
            <p className="card-text"><small className="text-muted">{date} at {time}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AppointmentList = ({ appointments }) => {
  return (
    <>
      {appointments.map((appointment, index) => (
        <AppointmentItem key={index} {...appointment} />
      ))}
    </>
  );
};

function homeHomepage() {

    // Example appointments data
  const appointments = [
    {
      hospitalName: 'MediCare Hospital',
      disease: 'General Checkup',
      date: '2023-12-10',
      time: '10:00 AM'
    },
    // ... more appointments
  ];
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
          <CDBSidebar textColor="#fff" backgroundColor="#0d6efd">
            <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
              <a
                href="/"
                className="text-decoration-none"
                style={{ color: 'inherit' }}
              >
                HealthCare Connect
              </a>
            </CDBSidebarHeader>
    
            <CDBSidebarContent className="sidebar-content">
              <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="columns">Search Hospitals</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/tables" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="table">Appointment History</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">Notifications</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/profile" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/analytics" activeClassName="activeClicked">
                  <CDBSidebarMenuItem icon="chart-line">
                    About Us
                  </CDBSidebarMenuItem>
                </NavLink>
                <NavLink
                  exact
                  to="/hero404"
                  target="_blank"
                  activeClassName="activeClicked"
                >
                  <CDBSidebarMenuItem icon="exclamation-circle">
                    Contact Us
                  </CDBSidebarMenuItem>
                </NavLink>
              </CDBSidebarMenu>
            </CDBSidebarContent>
    
            <CDBSidebarFooter style={{ textAlign: 'center' }}>
              <div
                style={{
                  padding: '20px 5px',
                }}
              >
                Authorized HealthCare
              </div>
            </CDBSidebarFooter>
          </CDBSidebar>


          {/* Right end side content - Appointment list */}
          <div className="flex-grow-1 p-4">
            <h3>Patient Name</h3>
            <AppointmentList appointments={appointments} />
          </div>
        </div>
        
      );
}

export default homeHomepage;



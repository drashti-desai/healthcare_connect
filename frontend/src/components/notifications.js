import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sidebar from './sidebar';

const NotificationItem = ({ title, time, message }) => {
  return (
    
    <a href="http://localhost:3000/" className="list-group-item list-group-item-action" aria-current="true">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
        <small>{time}</small>
      </div>
      <p className="mb-1">{message}</p>
    </a>
  );
};

const NotificationsList = ({ notifications }) => {
  return (
    <div className="list-group">
      {notifications.map((notification, index) => (
        <NotificationItem key={index} {...notification} />
      ))}
    </div>
  );
};

const Notifications = () => {
  // This would be fetched from an API in a real application
  const notifications = [
    { title: 'Appointment Reminder', time: 'Just now', message: 'You have an appointment tomorrow at 10:00 AM.' },
    { title: 'New Message', time: '5 mins ago', message: 'Dr. Smith sent you a message.' },
  ];

  return (
    <div className="container mt-4">
      <h2>Notifications</h2>
      <NotificationsList notifications={notifications} />
    </div>
  );
};

export default Notifications;
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Forgotpassword from './components/forgotpassword';
import Userhomepage from './components/userHomepage';
import Adminhomepage from './components/adminHomepage';
import HospitalDetails from './components/hospitalDetail';
import SearchHospital from './components/searchHospital';
import Profile from './components/profile';
import Notifications from "./components/notifications";
import Bookappointment from "./components/bookappointment";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/forgotpassword" element={<Forgotpassword />}></Route>
        <Route path="/userhomepage" element={<Userhomepage />}></Route>
        <Route path="/hospital" element={<HospitalDetails />}></Route>
        <Route path="/searchhostpital" element={<SearchHospital />}></Route>
        <Route path="/notifications" element={<Notifications />}></Route>
        <Route path="/bookappointment" element={<Bookappointment />}></Route>

        <Route path="/adminhomepage" element={<Adminhomepage />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
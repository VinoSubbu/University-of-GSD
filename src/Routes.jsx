import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import Login from './components/Login';
import Admin from './components/Admin';
import Navbar from './components/Navbar';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Fees from './components/Fees';
import Course from './components/Course';
import ExamResult from './components/ExamResult';
import LoginModal from './components/LoginStudentModal';
import Home from './components/Home';
import LoginFaculty from './components/LoginFaculty';

const CmsRoutes = () => (
  <Router>
    <div className="app-container">
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/login-faculty" element={<LoginFaculty/>} />
      <Route path="/faculty" element={<Faculty/>} />
      <Route path="/login-student" element={<LoginModal />} />
      <Route path="/student" element={<Student/>} />
      <Route path="/fees" element={<Fees/>} />
      <Route path="/course" element={<Course/>} />
      <Route path="/exam-result" element={<ExamResult/>} />
    </Routes>
    </div>
  </Router>
);

export default CmsRoutes;

// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
// import Register from './auth/Register';
import Student from './components/Student';
// import Fees from './components/Fees';
import Course from './components/Course';
import Admin from './components/admin/Admin';
import TeacherAdmin from './components/admin/faculty-admin/TeacherAdmin';
import StudentAdmin from './components/admin/student-admin/StudentAdmin';
import ExamResult from './components/ExamResult';
import PrivateRoute from './components/PrivateRoute';
import Admission from './components/Admission';
import ContactUs from './components/ContactUs';
import Faculty from './components/Faculty';
import Student1 from './components/Student1';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student1" element={<Student1 />} />
        {/* <Route path="/fees" element={<Fees />} /> */}
        <Route path="/course" element={<Course />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-teacher" element={<TeacherAdmin />} />
        <Route path="/admin-student" element={<StudentAdmin />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/exam-result" element={<ExamResult />} />
        
        {/* <Route path="/" element={<Home />} /> */}
        {/* <PrivateRoute path="/home" element={<Home />} /> */}
        {/* <Route
          path="/home"
          element={<PrivateRoute element={<Home />} />}
        />
        <Route
          path="/teacher"
          element={<PrivateRoute element={<Teacher />} />}
        />
        <Route
          path="/student"
          element={<PrivateRoute element={<Student />} />}
        />
        <Route
          path="/fees"
          element={<PrivateRoute element={<Fees />} />}
        />
        <Route
          path="/course"
          element={<PrivateRoute element={<Course />} />}
        />
        <Route
          path="/exam-result"
          element={<PrivateRoute element={<ExamResult />} />}
        /> */}
        <Route path="*" element={<Navigate to="/home"  />} /> 
      </Routes>
    </Router>
  );
};

export default App;

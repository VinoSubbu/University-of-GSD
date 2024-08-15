import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/login">Login</Link>
    <Link to="/admin">Admin</Link>
    <Link to="/teacher">Teacher</Link>
    <Link to="/student">Student</Link>
    <Link to="/fees">Fees</Link>
    <Link to="/course">Course</Link>
    <Link to="/exam-result">Exam/Result</Link>
  </nav>
);

export default Navbar;

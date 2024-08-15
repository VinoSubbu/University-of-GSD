import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/styles/student.css";
import LoginModal from "./LoginStudentModal";
import GURU from "../assets/proGURU.jpeg";
import EditIcon from '@mui/icons-material/Edit';

const Student = () => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          "https://freetestapi.com/api/v1/students"
        );
        setStudent(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchStudent();
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isAuthenticated) {
        e.preventDefault();
        e.returnValue = "Are you sure you want to logout?";
      }
    };

    const handlePopState = (e) => {
      if (isAuthenticated) {
        const shouldLogout = window.confirm("Are you sure you want to logout?");
        if (!shouldLogout) {
          window.history.pushState(null, null, window.location.pathname);
        } else {
          setIsAuthenticated(false);
        }
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    // Push the current state to enable the detection of back navigation
    window.history.pushState(null, null, window.location.pathname);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <LoginModal onLogin={setIsAuthenticated} />;
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!student) return <p>No student data available.</p>;

  return (
    <div className="student-container">

      <div className="student-profile">
        <img src={GURU} alt="profile-GURU" className="student-image" />
      </div>

    <div className="stu-info-outer">
    <div className="student-info">
        <h2 className="stu-name" >Guru Prasad <EditIcon className="edit-name" style={{cursor:'pointer'}} /></h2>
        <div className="info">
          <label htmlFor="id">ID : </label>
          <p className="val">001</p>
        </div>
        <div className="info">
          <label htmlFor="age">Age : </label>
          <p className="val">24</p>
        </div>
        <div className="info">
          <label htmlFor="gender">Gender : </label>
          <p className="val">Male</p>
        </div>
        <div className="info">
          <label htmlFor="address">Address : </label>
          <p className="val">Thiruvallur</p>
        </div>
        <div className="info">
          <label htmlFor="email">Email : </label>
          <p className="val">guru@gmail.com</p>
        </div>
        <div className="info">
          <label htmlFor="phone">Phone : </label>
          <p className="val">9876543210</p>
        </div>
        <div className="info">
          <label htmlFor="dept">Department : </label>
          <p className="val">CSC</p>
        </div>
        <div className="info">
          <label htmlFor="gpa">GPA : </label>
          <p className="val">8.7</p>
        </div>
      </div>
      <div className="student-info">
        <h2 className="stu-name">Your Examinations</h2>
        <div className="list" style={{marginBottom:'30px'}}>
        <ul>
          <li>Advanced JavaScript</li>
          <li>React JS</li>
          <li>Core Java</li>
          <li>Selenium</li>
          <li>DataBase</li>
        </ul>
        </div>
        <h2 className="stu-name">Acheivement</h2>
        <div className="list">
        <ul>
          <li>Selenium workshop</li>
          <li>JavScript certified</li>
          <li>Core Java trainee</li>
        </ul>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Student;

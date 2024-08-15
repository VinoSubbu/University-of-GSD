import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import LoginAdminModal from "../LoginAdmin";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import student from '../../assets/studentad.png' 
import faculty from '../../assets/facultyad.png' 
import exam from '../../assets/examad.png' 
import course from '../../assets/coursead.png' 

import "../../assets/styles/admin.css";

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleStudentAdmin = () => {
    navigate('/admin-student');
  };

  const handleFacultyAdmin = () => {
    navigate('/admin-teacher');
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isAuthenticated) {
        e.preventDefault();
        e.returnValue = "Are you sure you want to logout?";
      }
    };

    const handlePopState = () => {
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
    window.history.pushState(null, null, window.location.pathname);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <LoginAdminModal onLogin={setIsAuthenticated} />;
  }

  return (

      <div className="admin-container">
        <h2 className="admin-heading">Welcome to the Admin Dashboard</h2>

        <div className="card-container">
          {/* Student */}
          <Card sx={{ maxWidth: 250 }} classname="cards-admin">
            <CardMedia
            className="img-admin"
              component="img"
              alt="green iguana"
              height="210"
              // width="180"
              src={student}
              onClick={handleStudentAdmin}
            />

            <CardActions  className="btn-admin" >
              <Button onClick={handleStudentAdmin} >Student</Button>
            </CardActions>
          </Card>

          {/* Faculty */}
          <Card sx={{ maxWidth: 250 }} classname="cards-admin">
            <CardMedia
            className="img-admin"
              component="img"
              alt="green iguana"
              height="210"
              // width="180"
              src={faculty}
              onClick={handleFacultyAdmin}
            />

            <CardActions  className="btn-admin" >
              <Button onClick={handleFacultyAdmin}>Faculty</Button>
            </CardActions>
          </Card>

          {/* Course */}
          <Card sx={{ maxWidth: 250 }} classname="cards-admin">
            <CardMedia
            className="img-admin"
              component="img"
              alt="green iguana"
              height="210"
              // width="180"
              src={course}
            />

            <CardActions  className="btn-admin" >
              <Button >Course</Button>
            </CardActions>
          </Card>

          {/* Exams */}
          <Card sx={{ maxWidth: 250 }} classname="cards-admin">
            <CardMedia
            className="img-admin"
              component="img"
              alt="green iguana"
              height="210"
              // width="180"
              src={exam}
            />

            <CardActions  className="btn-admin" >
              <Button >Exams </Button>
            </CardActions>
          </Card>

          
        </div>

        <div className="slide">
          <h2 style={{color:'white'}}>Scheduled by Admin with Organisation Support</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, quasi similique. Hic esse non natus fugaa!</p>
        </div>
      </div>

  );
};

export default Admin;

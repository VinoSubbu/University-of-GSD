import React, { useState, useEffect } from "react";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";
import "../../../assets/styles/admin.css";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


// Hardcoded initial state for students
const initialStudentData = [
  {
    id: 1,
    name: "Guru Prasad",
    age: 20,
    gender: "Male",
    address: "chennai, Maharashtra, 400001, India",
    email: "guru@gmail.com",
    phone: "9876543212",
    dept: "IT",
    gpa: 9.0,
  },
  {
    id: 2,
    name: "Meera Gupta",
    age: 22,
    gender: "Female",
    address: "Delhi, Delhi, 110001, India",
    email: "meera@gmail.com",
    phone: "9876543213",
    dept: "Mechanical",
    gpa: 8.5,
  },
];

// Initial state for forms
const initialStudentFormState = {
  id: null,
  name: "",
  age: "",
  gender: "",
  address: "",
  email: "",
  phone: "",
  dept: "",
  gpa: "",
};

const StudentAdmin = () => {
  const [students, setStudents] = useState(initialStudentData);
  const [studentForm, setStudentForm] = useState(initialStudentFormState);
  const [editingStudent, setEditingStudent] = useState(false);
  const navigate = useNavigate();

  const handleBackAdminPage = () => {
    navigate('/admin');
  };

  // Handle student form submission
  const handleStudentSubmit = (studentData) => {
    if (editingStudent) {
      setStudents(
        students.map((student) =>
          student.id === studentData.id ? studentData : student
        )
      );
      setEditingStudent(false);
    } else {
      setStudents([...students, { ...studentData, id: students.length + 1 }]);
    }
    setStudentForm(initialStudentFormState);
  };

  const handleStudentEdit = (student) => {
    setStudentForm(student);
    setEditingStudent(true);
  };

  const handleStudentDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <>
      <div className="student-management">
        <h3>Student Management</h3>
        <StudentForm
          form={studentForm}
          handleChange={(e) =>
            setStudentForm({ ...studentForm, [e.target.name]: e.target.value })
          }
          handleSubmit={handleStudentSubmit}
          editing={editingStudent}
        />
        <StudentList
          students={students}
          handleEdit={handleStudentEdit}
          handleDelete={handleStudentDelete}
        />
        <Button  className='backbtnAdmin' variant='contained' onClick={handleBackAdminPage}>Back to Admin Page</Button>
      </div>
    </>
  );
};

export default StudentAdmin;
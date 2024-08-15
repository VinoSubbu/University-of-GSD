import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TeacherForm from "./TeacherForm";
import TeacherList from "./TeacherList";
import Button from '@mui/material/Button';
import "../../../assets/styles/admin.css";

// Hardcoded initial state for teachers
const initialTeacherData = [
  {
    id: 1,
    name: "Dr. Ravi Sharma",
    age: 45,
    gender: "Male",
    address: "Pune, Maharashtra, 411001, India",
    email: "ravi.sharma@gmail.com",
    phone: "9876543214",
    dept: "Civil Engineering",
  },
  {
    id: 2,
    name: "Ms. Anjali Menon",
    age: 38,
    gender: "Female",
    address: "Kochi, Kerala, 682001, India",
    email: "anjali.menon@gmail.com",
    phone: "9876543215",
    dept: "Computer Science",
  },
];

// Initial state for forms
const initialTeacherFormState = {
  id: null,
  name: "",
  age: "",
  gender: "",
  address: "",
  email: "",
  phone: "",
  dept: "",
};

const TeacherAdmin = () => {
  const [teachers, setTeachers] = useState(initialTeacherData);
  const [teacherForm, setTeacherForm] = useState(initialTeacherFormState);
  const [editingTeacher, setEditingTeacher] = useState(false);
  const navigate = useNavigate();

  const handleBackAdminPage = () => {
    navigate('/admin');
  };

  // Handle teacher form submission
  const handleTeacherSubmit = (teacherData) => {
    if (editingTeacher) {
      setTeachers(
        teachers.map((teacher) =>
          teacher.id === teacherData.id ? teacherData : teacher
        )
      );
      setEditingTeacher(false);
    } else {
      setTeachers([...teachers, { ...teacherData, id: teachers.length + 1 }]);
    }
    setTeacherForm(initialTeacherFormState);
  };

  const handleTeacherEdit = (teacher) => {
    setTeacherForm(teacher);
    setEditingTeacher(true);
  };

  const handleTeacherDelete = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  return (
    <>
      <div className="teacher-management">
        <h3>Teacher Management</h3>
        <TeacherForm
          form={teacherForm}
          handleChange={(e) =>
            setTeacherForm({ ...teacherForm, [e.target.name]: e.target.value })
          }
          handleSubmit={handleTeacherSubmit}
          editing={editingTeacher}
        />
        <TeacherList
          teachers={teachers}
          handleEdit={handleTeacherEdit}
          handleDelete={handleTeacherDelete}
        />
        <Button  className='backbtnAdmin' variant='contained' onClick={handleBackAdminPage}>Back to Admin Page</Button>
      </div>
    </>
  );
};

export default TeacherAdmin;
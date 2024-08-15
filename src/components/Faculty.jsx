import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginFacultyModal from "../components/LoginFaculty";
import "../assets/styles/faculty.css";
import facultyImage from "../assets/faculty.png";

const Faculty = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Guru Prasad",
      age: 24,
      gender: "Male",
      address: "Thiruvallur, Tamil Nadu, 602001, India",
      email: "guru@gmail.com",
      phone: "9876543210",
      dept: "CSC",
      gpa: 8.7,
    },
    {
      id: 2,
      name: "Nithya Rajan",
      age: 22,
      gender: "Female",
      address: "Chennai, Tamil Nadu, 600001, India",
      email: "nithya@gmail.com",
      phone: "9876543211",
      dept: "ECE",
      gpa: 9.2,
    },
  ]);

  const [faculty] = useState({
    name: "Dr. John Doe",
    designation: "Professor of Computer Science",
    department: "Computer Science",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 University Ave, City, State",
    qualifications: "Ph.D. in Computer Science",
    experience: "15 years of teaching and research",
  });

  const [form, setForm] = useState({
    id: null,
    name: "",
    age: "",
    gender: "",
    address: "",
    email: "",
    phone: "",
    dept: "",
    gpa: "",
  });

  const [editing, setEditing] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editing) {
      setStudents(
        students.map((student) =>
          student.id === form.id ? { ...student, ...form } : student
        )
      );
      setEditing(false);
    } else {
      setStudents([...students, { ...form, id: students.length + 1 }]);
    }
    setForm({
      id: null,
      name: "",
      age: "",
      gender: "",
      address: "",
      email: "",
      phone: "",
      dept: "",
      gpa: "",
    });
  };

  // Handle edit
  const handleEdit = (student) => {
    setForm(student);
    setEditing(true);
  };

  // Handle delete
  const handleDelete = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

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
    return <LoginFacultyModal onLogin={setIsAuthenticated} />;
  }

  return (
    <div className="faculty-container">
      <div className="faculty-outer">
        <div className="faculty-profile">
          <img
            src={facultyImage}
            alt="Faculty Profile"
            className="faculty-image"
          />
        </div>
        <div className="faculty-info">
          <h2 className="faculty-name" style={{ color: "#007bff" }}>
            {faculty.name}
          </h2>
          <p className="faculty-designation"
          style={{
            marginBottom:'5px' ,
            fontWeight:'bold'
          }}
          >{faculty.designation}</p>

          <div className="info" style={{marginBottom:'5px'}}>
            <label htmlFor="department">Department: </label>
            <p className="val">{faculty.department}</p>
          </div>

          <div className="info" style={{marginBottom:'5px'}}>
            <label htmlFor="email">Email : </label>
            <p className="val">{faculty.email}</p>
          </div>

          <div className="info" style={{marginBottom:'5px'}}>
            <label htmlFor="phone">Phone : </label>
            <p className="val">{faculty.phone}</p>
          </div>

          <div className="info" style={{marginBottom:'5px'}}>
            <label htmlFor="address">Address : </label>
            <p className="val">{faculty.address}</p>
          </div>

          <div className="info" style={{marginBottom:'5px'}}>
            <label htmlFor="qualifications">Qualifications : </label>
            <p className="val">{faculty.qualifications}</p>
          </div>

          <div className="info" style={{marginBottom:'5px'}}>
            <label htmlFor="experience">Experience : </label>
            <p className="val">{faculty.experience}</p>
          </div>
        </div>
      </div>

      <h2>Student Management</h2>

      <form onSubmit={handleSubmit} className="student-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={form.gender}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="dept"
          placeholder="Department"
          value={form.dept}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="gpa"
          placeholder="GPA"
          value={form.gpa}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {editing ? "Update Student" : "Add Student"}
        </button>
      </form>

      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-item">
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>
            <p>Address: {student.address}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Department: {student.dept}</p>
            <p>GPA: {student.gpa}</p>
            <button onClick={() => handleEdit(student)}>Edit</button>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;

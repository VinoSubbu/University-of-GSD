import React from 'react';

const StudentList = ({ students, handleEdit, handleDelete }) => {
  return (
    <div className="list-container">
      <h4>Student List</h4>
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        students.map((student) => (
          <div key={student.id} className="list-item">
            <p><strong>{student.name}</strong></p>
            <p>Age: {student.age}</p>
            <p>Gender: {student.gender}</p>
            <p>Dept: {student.dept}</p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>GPA: {student.gpa}</p>
            <button onClick={() => handleEdit(student)}>Edit</button>
            <button onClick={() => handleDelete(student.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default StudentList;

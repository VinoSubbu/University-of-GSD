import React from 'react';

const TeacherList = ({ teachers, handleEdit, handleDelete }) => {
  return (
    <div className="list-container">
      <h4>Teacher List</h4>
      {teachers.length === 0 ? (
        <p>No teachers available.</p>
      ) : (
        teachers.map((teacher) => (
          <div key={teacher.id} className="list-item">
            <p><strong>{teacher.name}</strong></p>
            <p>Age: {teacher.age}</p>
            <p>Gender: {teacher.gender}</p>
            <p>Dept: {teacher.dept}</p>
            <p>Email: {teacher.email}</p>
            <p>Phone: {teacher.phone}</p>
            <button onClick={() => handleEdit(teacher)}>Edit</button>
            <button onClick={() => handleDelete(teacher.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default TeacherList;

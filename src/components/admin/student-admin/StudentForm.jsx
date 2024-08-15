import React from 'react';

const StudentForm = ({ form, handleChange, handleSubmit, editing }) => {
  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(form); }} className="form-container">
      <h4>{editing ? "Edit Student" : "Add Student"}</h4>
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input type="number" name="age" value={form.age} onChange={handleChange} placeholder="Age" required />
      <input type="text" name="gender" value={form.gender} onChange={handleChange} placeholder="Gender" required />
      <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
      <input type="text" name="dept" value={form.dept} onChange={handleChange} placeholder="Department" required />
      <input type="number" name="gpa" value={form.gpa} onChange={handleChange} placeholder="GPA" step="0.1" required />
      <button type="submit">{editing ? "Update Student" : "Add Student"}</button>
    </form>
  );
};

export default StudentForm;

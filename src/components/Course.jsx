// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/styles/course.css'; 

// const Course = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       const response = await axios.get('/api/courses');
//       setCourses(response.data);
//     };
//     fetchCourses();
//   }, []);

//   return (
//     <div className="container course-module">
//       <h2>Course Module</h2>
//       <div>
//         <h3>Courses</h3>
//         {courses.map((course) => (
//           <div key={course.id} className="course-card">
//             <p>{course.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Course;

import React from 'react'

function Course() {
  return (
    <div>Course</div>
  )
}

export default Course
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../assets/styles/exam-result.css'; 

// const ExamResult = () => {
//   const [exams, setExams] = useState([]);
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     const fetchExams = async () => {
//       const response = await axios.get('/api/exams');
//       setExams(response.data);
//     };

//     const fetchResults = async () => {
//       const response = await axios.get('/api/results');
//       setResults(response.data);
//     };

//     fetchExams();
//     fetchResults();
//   }, []);

//   return (
//     <div className="container examresult-module">
//       <h2>Exam and Result Module</h2>
//       <div>
//         <h3>Exams</h3>
//         {exams.map((exam) => (
//           <div key={exam.id} className="exam-card">
//             <p>{exam.name}</p>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h3>Results</h3>
//         {results.map((result) => (
//           <div key={result.id} className="result-card">
//             <p>{result.subject}: {result.grade}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExamResult;


import React from 'react'

function ExamResult() {
  return (
    <div>ExamResult</div>
  )
}

export default ExamResult
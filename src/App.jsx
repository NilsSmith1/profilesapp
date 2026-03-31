


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import mhPortrait from './assets/mhportrait-15.jpg'
import viteLogo from '/vite.svg'
import './App.css'

const courses = [
  // Math courses
  { id: 1, name: "Calculus I", code: "MATH1296", category: "Math", description: "Limits, derivatives, and integrals." },
  { id: 2, name: "Calculus II", code: "MATH1297", category: "Math", description: "Advanced integration techniques, infinite sequences and series, and applications of the definite integra" },
  { id: 3, name: "Intro to Probability and Statistics I", code: "STAT3611", category: "Math", description: "Introduction to probability and statistical inference." },
  { id: 4, name: "Differential Equations with Linear Algebra", code: "MATH3280", category: "Math", description: "First-order differential equations, systems of differential equations, and their applications." },
  { id: 5, name: "Discrete Math", code: "MATH3355", category: "Math", description: "Logic, sets, relations, and combinatorics." },
  // Computer Science courses
  { id: 6, name: "Intro to Computer Science", code: "CS1612", category: "Computer Science", description: "Introduction to programming and problem-solving." },
  { id: 7, name: "Object-Oriented Prog & Design", code: "CS1622", category: "Computer Science", description: "Introduction to object-oriented programming and software design principles." },
  { id: 8, name: "Data Structures and Analysis", code: "CS1632", category: "Computer Science", description: "Fundamental data structures and algorithms for efficient problem-solving." },
  { id: 9, name: "Computer Organization and Architecture", code: "CS2521", category: "Computer Science", description: "Structure and behavior of computer systems, including hardware and software interaction." },
  // Elective courses
  { id: 10, name: "General Physics I", code: "PHYS2013", category: "Electives", description: "Introduction to the fundamental principles of physics." },
  { id: 11, name: "	Introduction to Environmental Science", code: "EES1130", category: "Electives", description: "Introduction to environmental science and sustainability." },
  { id: 12, name: "Principles of Economics: Macroeconomics", code: "ECON1022", category: "Electives", description: "Introduction to macroeconomic principles, including economic growth, inflation, and monetary policy."
 }
];

function App() {

  const groupedCourses = courses.reduce((groups, course) => {
    const type = course.category;
    if (!groups[course.category]) {
      groups[course.category] = [];
    }
    groups[course.category].push(course);
    return groups;
  }, {});

  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header>
          <h1>Nils Smith</h1>
          <p>Math & Computer Science Student at the University of Minnesota Duluth</p>
          <img src={mhPortrait-15} alt="Nils Smith" width="500" height="333" />
        </header>



<h2>Relevant Course List</h2>

    {Object.keys(groupedCourses).map(category => (
      <section key={category} className="course-category">
        <h2 className="category-title">{category}</h2>

    
    <div className="course-list">
      {groupedCourses[category].map(course => (
    <div key={course.id} className="course-card">
              <span className="course-code">{course.code}</span>
              <h3>{course.name}</h3>
              <p>{course.description}</p>
            </div>
      ))}
    </div>
      </section>
    ))}
      
     </div>
    </>
  )
}


export default App

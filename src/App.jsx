import { useState } from 'react'
import reactLogo from './assets/react.svg'
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
  { id: 10, name: "General Physics I", code: "PHYS2013", category: "Elective", description: "Introduction to the fundamental principles of physics." },
  { id: 11, name: "	Introduction to Environmental Science", code: "EES1130", category: "Elective", description: "Introduction to environmental science and sustainability." },
  { id: 12, name: "Principles of Economics: Macroeconomics", code: "ECON1022", category: "Elective", description: "Introduction to macroeconomic principles, including economic growth, inflation, and monetary policy."
 }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Nils Smith </h1>
      
      </div>
  
    
     
    </>
  )
}

export default App

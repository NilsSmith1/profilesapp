import { useState } from 'react';
import '../App.css';

const courses = [
  { id: 1,  name: "Calculus I",                               code: "MATH1296", category: "Math",             description: "Limits, derivatives, and integrals." },
  { id: 2,  name: "Calculus II",                              code: "MATH1297", category: "Math",             description: "Advanced integration techniques, infinite sequences and series, and applications of the definite integral." },
  { id: 3,  name: "Intro to Probability and Statistics I",    code: "STAT3611", category: "Math",             description: "Introduction to probability and statistical inference." },
  { id: 4,  name: "Differential Equations with Linear Algebra", code: "MATH3280", category: "Math",           description: "First-order differential equations, systems of differential equations, and their applications." },
  { id: 5,  name: "Discrete Mathematics",                            code: "MATH3355", category: "Math",             description: "Logic, sets, relations, and combinatorics." },
  { id: 6,  name: "Intro to Computer Science",                code: "CS1612",   category: "Computer Science", description: "Introduction to programming and problem-solving." },
  { id: 7,  name: "Object-Oriented Prog & Design",            code: "CS1622",   category: "Computer Science", description: "Introduction to object-oriented programming and software design principles." },
  { id: 8,  name: "Data Structures and Analysis",             code: "CS1632",   category: "Computer Science", description: "Fundamental data structures and algorithms for efficient problem-solving." },
  { id: 9,  name: "Computer Organization and Architecture",   code: "CS2521",   category: "Computer Science", description: "Structure and behavior of computer systems, including hardware and software interaction." },
  { id: 10, name: "General Physics I",                        code: "PHYS2013", category: "Electives",        description: "Introduction to the fundamental principles of physics." },
  { id: 11, name: "Introduction to Environmental Science",    code: "EES1130",  category: "Electives",        description: "Introduction to environmental science and sustainability." },
  { id: 12, name: "Principles of Economics: Macroeconomics", code: "ECON1022", category: "Electives",        description: "Introduction to macroeconomic principles, including economic growth, inflation, and monetary policy." },
  { id: 13, name: "Software Engineering (In Progress)",                     code: "CS3541",   category: "Computer Science", description: "Software development lifecycle, project management, and team collaboration." },
  {id: 14, name: "Computer Security (In Progress)", code: "CS4332", category: "Computer Science", description: "Fundamental principles of computer security, including cryptography, network security, and secure software development." },
  {id: 15, name: "Calculus III (In Progress)", code: "MATH3298", category: "Math", description: "Multivariable calculus, including partial derivatives, multiple integrals, and vector calculus. " }

];

const Coursework = () => {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', ...new Set(courses.map(c => c.category))];

  const filtered = activeTab === 'All' ? courses : courses.filter(c => c.category === activeTab);

  const grouped = filtered.reduce((acc, course) => {
    if (!acc[course.category]) acc[course.category] = [];
    acc[course.category].push(course);
    return acc;
  }, {});

  return (
    <section className="coursework-section" id="coursework">
      <p className="section-label">University coursework</p>

      <div className="tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`tab${activeTab === cat ? ' active' : ''}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {Object.keys(grouped).map(category => (
        <div key={category} className="course-group">
          <p className="category-header">{category}</p>
          <div className="course-grid">
            {grouped[category].map(course => (
              <div key={course.id} className="course-card">
                <span className="course-code">{course.code}</span>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Coursework;

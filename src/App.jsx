import { useState, useEffect } from 'react'
import metransparent from './assets/metransparent-removebg.png';
import './App.css'
import githublogo from './assets/github.png';
import linkedinlogo from './assets/linkedin.png';
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import { Link } from 'react-router-dom'


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

const Navbar = () => (
  <nav className="navbar">
    <span className="nav-name"><Link to='/'>Nils Smith</Link></span>

    <div className="nav-links">
      <Link to='/'>About</Link>
      <a href="#coursework">Coursework</a>
      <Link to="/projects">Projects</Link>
      <a href="#contact">Contact</a>

      <div className= "githubLogo">
        <a href="https://github.com/NilsSmith1" target="_blank" rel="noreferrer"> <img src={githublogo} alt="GitHub" className='githubLogo' /> </a>
      </div>
      
      <div className= "linkedinLogo">

        <a href="https://www.linkedin.com/in/nilsksmith/" target="_blank" rel="noreferrer"> <img src={linkedinlogo} alt="Linked In" className='linkedinLogo' /> </a>

      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero" id="about">
    <div className="hero-text">
      <p className="hero-eyebrow">University of Minnesota Duluth</p>
      <h1 className="hero-heading">Math &amp;<br />Computer<br />Science</h1>
      <p className="hero-bio">
        Student studying mathematics and computer science with interests in
        finance, data analysis, and systems engineering.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Get in touch</a>
        <a href="/resume.pdf" className="btn-secondary" target="_blank" rel="noreferrer">View résumé</a>
      </div>
    </div>
    <div className= "logoslarge">
      <img src={metransparent} alt="Nils Smith" className="portrait" />
    </div>
   
  </section>
);

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



const Footer = () => (
  <footer className="footer" id="contact">
    <div className="container footer-inner">
      <div className="contact-emails" aria-label="contact emails">
        <a href="mailto:nils.k.smith@gmail.com" className="email-pill">nils.k.smith@gmail.com</a>
        <a href="mailto:smi03035@umn.edu" className="email-pill">smi03035@umn.edu</a>
      </div>

      <div className="footer-links">
        <a href="https://github.com/NilsSmith1" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/nilsksmith/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
      </div>
    </div>
  </footer>
);

function App() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="site-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<main className="main-content"><Hero /><Coursework /></main>} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}



export default App;

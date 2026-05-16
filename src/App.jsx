import { useEffect } from 'react'
import metransparent from './assets/metransparent-removebg.png';
import './App.css'
import githublogo from './assets/github.png';
import linkedinlogo from './assets/linkedin.png';
import { Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import { Link } from 'react-router-dom'
import Coursework from './pages/Coursework'



const Navbar = () => (
  <nav className="navbar">
    <span className="nav-name"><Link to='/'>Nils Smith</Link></span>

    <div className="nav-links">
      <Link to="/coursework">Coursework</Link>
      <Link to="/projects">Projects</Link>
    

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

// Coursework moved to src/pages/Coursework.jsx



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
        <Route path="/coursework" element={<Coursework />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;

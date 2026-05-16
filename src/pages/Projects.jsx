import ProjectWebsite from '../assets/ProjectWebsite.png';
import FinancialPortfolioSimulator from '../assets/ProjectFinance.png';

const projects = [
  { id: 1, 
    name: "Personal Protfolio Website", 
    description: "A personal portfolio website that I built from scratch using React. I made it to showcase my coursework, projects, and contact information. It features a clean and modern design, is fully responsive, and is hosted on AWS amplify.",
    technologies: ["React", "CSS", "AWS Amplify"],
    gitlink: "https://github.com/NilsSmith1/profilesapp.git",
    image: ProjectWebsite},

  { id: 2, 
    name: "Financial Portfolio Simulator",
    description: "A financial portfolio simulator that implements Monte Carlo methods to simulate the performance of a portfolio of stocks over time. The simulator allows users to input their own portfolio and run simulations to see how it would perform under different market conditions.",
    technologies: ["Python", "SQL", "Pandas", "NumPy", "Jupyter Notebook"],
    gitlink: "https://github.com/NilsSmith1/financial-portfolio-simulator.git",
    image: FinancialPortfolioSimulator},
]


  function Projects() {
    return (
      <div>
        <h1>Projects</h1>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem'}}>
          {projects.map(p => (
          <article key={p.id} className="course-card">
            <img src={p.image} alt={p.name} style={{width: '100%', height: '140px', objectFit: 'cover', borderRadius: '8px'}} />
            <h3>{p.name}</h3>
            <p style={{color: 'var(--color-text-secondary)'}}>{p.description}</p>
            <a href={p.gitlink} target="_blank" rel="noreferrer">View on GitHub</a>
          </article>
          ))}
        </div>
      </div>
    )
  }
export default Projects
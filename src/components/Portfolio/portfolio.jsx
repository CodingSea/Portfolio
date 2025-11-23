import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import './Portfolio.css';
import portfolioInfo from './data/portfolioInfo.json';
import projectsData from './data/projects.json';

const Portfolio = () =>
{
  const [portfolioData, setPortfolioData] = useState({
    contact: {},
    about: '',
    skills: {},
    projects: []
  });

  useEffect(() =>
  {
    setPortfolioData({
      contact: portfolioInfo.contact,
      about: portfolioInfo.about,
      skills: portfolioInfo.skills,
      projects: projectsData.projects
    });
  }, []);

  return (
    <div className="portfolio-container">
      {/* Hero Section */ }
      <section className="hero-section">
        <div className="hero-content">
          <div>
            <h1 className="hero-name">{ portfolioData.contact.name }</h1>
            <p className="hero-title">{ portfolioData.contact.title }</p>
            <p className="hero-subtitle">{ portfolioData.contact.nationality }</p>
          </div>

          {/* Contact Links */ }
          <div className="contact-links">
            <a href={ `tel:${ portfolioData.contact.phone }` } className="contact-btn">
              <Phone size={ 20 } />
              <span>{ portfolioData.contact.phone }</span>
            </a>
            <a href={ `mailto:${ portfolioData.contact.email }` } className="contact-btn">
              <Mail size={ 20 } />
              <span>Email</span>
            </a>
            <a href={ portfolioData.contact.linkedin } target="_blank" rel="noopener noreferrer" className="contact-btn">
              <Linkedin size={ 20 } />
              <span>LinkedIn</span>
            </a>
            <a href={ portfolioData.contact.github } target="_blank" rel="noopener noreferrer" className="contact-btn">
              <Github size={ 20 } />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */ }
      <section className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">{ portfolioData.about }</p>
        </div>
      </section>

      {/* Skills Section */ }
      <section className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            { Object.entries(portfolioData.skills).map(([category, items]) => (
              <div key={ category } className="skill-card">
                <h3 className="skill-category">{ category }</h3>
                <ul className="skill-list">
                  { items.map((skill, idx) => (
                    <li key={ idx } className="skill-item">
                      <span className="skill-dot"></span>
                      { skill }
                    </li>
                  )) }
                </ul>
              </div>
            )) }
          </div>
        </div>
      </section>

      {/* Projects Section */ }
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            { portfolioData.projects.map((project) => (
              <div key={ project.id } className="project-card">
                <img src={ window.location.origin + `/${project.image}` } alt={ project.name } className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{ project.name }</h3>
                  <p className="project-description">{ project.description }</p>
                  <div className="project-tools">
                    { project.tools.map((tool, idx) => (
                      <span key={ idx } className="tool-tag">
                        { tool }
                      </span>
                    )) }
                  </div>
                  <a href={ project.link } target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project
                    <ExternalLink size={ 16 } />
                  </a>
                </div>
              </div>
            )) }
          </div>
        </div>
      </section>

      {/* Footer */ }
      <footer>
        <p>© 2025 { portfolioData.contact.name }. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState('about');

  // Sample projects data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Neural Network",
      description: "Implemented a deep neural network from scratch in Python, including forward/backward propagation, gradient descent, activation functions, and loss computation without using high-level ML frameworks.",
      tech: ["Python", "Numpy"],
      github: "#",
      image: "/Images/NeuralNetwork.jpg" // Add your image path here
    },
    {
      id: 2,
      title: "Pathora", 
      description: "Developed the backend of a full-stack web application during a 6-hour hackathon using Python and React, integrating an AI agent to generate personalized learning pathways and increase accessibility to education.",
      tech: ["React", "Python", "Flask"],
      github: "https://github.com/israelavendanojr/pathora",
      image: "/Images/mountain.jpg" // Add your image path here
    },
    {
      id: 3,
      title: "Data Processing Pipeling",
      description: "Developed scalable Python-based image analysis pipelines using Pillow to study gut proliferation in ASD and WT mouse models, assessing the effects of CBD and terpene therapy. Enabled efficient, team-wide access to high-throughput analysis results.",
      tech: ["Python", "Pandas", "Pillow"],
      github: "#",
      live: "#",
      image: "/Images/day11_image1_mouseRJ1-8_ch00_SV.jpg" // Add your image path here
    }
  ];

  const styles = {
    app: {
      minHeight: '100vh',
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    nav: {
      borderBottom: '1px solid #374151',
      padding: '0 20px'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 0'
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold'
    },
    navLinks: {
      display: 'flex',
      gap: '32px'
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#9CA3AF',
      fontWeight: '500',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'color 0.2s ease'
    },
    navButtonActive: {
      color: '#ffffff'
    },
    main: {
      padding: '64px 20px',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    aboutContainer: {
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto'
    },
    mainTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.2'
    },
    mainParagraph: {
      fontSize: '20px',
      color: '#D1D5DB',
      lineHeight: '1.6',
      marginBottom: '48px',
      maxWidth: '600px',
      margin: '0 auto 48px'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginBottom: '48px'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#9CA3AF',
      textDecoration: 'none',
      transition: 'color 0.2s ease'
    },
    viewWorkButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.2s ease'
    },
    projectsContainer: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    projectsHeader: {
      marginBottom: '48px'
    },
    projectsTitle: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '16px'
    },
    projectsSubtitle: {
      color: '#9CA3AF',
      fontSize: '18px'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
      marginBottom: '48px'
    },
    projectCard: {
      backgroundColor: '#111827',
      borderRadius: '8px',
      border: '1px solid #374151',
      overflow: 'hidden',
      transition: 'border-color 0.2s ease'
    },
    projectImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      backgroundColor: '#374151'
    },
    projectContent: {
      padding: '24px'
    },
    projectTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '12px'
    },
    projectDescription: {
      color: '#9CA3AF',
      fontSize: '14px',
      lineHeight: '1.5',
      marginBottom: '16px'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '24px'
    },
    techTag: {
      padding: '4px 8px',
      backgroundColor: '#374151',
      color: '#D1D5DB',
      fontSize: '12px',
      borderRadius: '4px'
    },
    projectLinks: {
      display: 'flex',
      gap: '16px'
    },
    projectLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      color: '#9CA3AF',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.2s ease'
    },
    githubButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid #4B5563',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '500',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontSize: '16px',
      textDecoration: 'none',
      transition: 'border-color 0.2s ease, background-color 0.2s ease'
    },
    footer: {
      borderTop: '1px solid #374151',
      marginTop: '80px',
      padding: '32px 20px',
      textAlign: 'center',
      color: '#9CA3AF'
    }
  };

  const AboutPage = () => (
    <div style={styles.aboutContainer}>
      <h1 style={styles.mainTitle}>
        Zuriahn Yun
      </h1>
      <p style={styles.mainParagraph}>
        I'm a Data Science undergraduate with minors in Economics and Mathematics at Western Washington University. I currently conduct neuroscience research in the Kaplan Lab, focusing on image analysis and experimental data processing. Starting this fall, I will begin work on software vulnerability detection and cognitive training research, exploring the intersection of human error and AI.
      </p>
      
      <div style={styles.socialLinks}>
        <a 
          href="https://github.com/Zuriahn-Yun" 
          style={styles.socialLink}
          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
          onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
        >
          <Github size={20} />
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/zuriahnyun/" 
          style={styles.socialLink}
          onMouseEnter={(e) => e.target.style.color = '#ffffff'}
          onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a 
      href="mailto:yourname@example.com" 
      style={styles.socialLink}
      onMouseEnter={(e) => e.target.style.color = '#ffffff'}
      onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
    >
      <Mail size={20} />
      Contact
    </a>
      </div>

      <button
        style={styles.viewWorkButton}
        onClick={() => setCurrentPage('projects')}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#E5E7EB'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#ffffff'}
      >
        View My Work
        <ArrowRight size={18} />
      </button>
    </div>
  );

  const ProjectsPage = () => (
    <div style={styles.projectsContainer}>
      <div style={styles.projectsHeader}>
        <h1 style={styles.projectsTitle}>Projects</h1>
        <p style={styles.projectsSubtitle}>
        </p>
      </div>

      <div style={styles.projectsGrid}>
        {projects.map(project => (
          <div 
            key={project.id}
            style={styles.projectCard}
            onMouseEnter={(e) => e.target.style.borderColor = '#4B5563'}
            onMouseLeave={(e) => e.target.style.borderColor = '#374151'}
          >
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title}
                style={styles.projectImage}
              />
            )}
            <div style={styles.projectContent}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>
                {project.description}
              </p>
              
              <div style={styles.techTags}>
                {project.tech.map(tech => (
                  <span key={tech} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={styles.projectLinks}>
                <a 
                  href={project.github}
                  style={styles.projectLink}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  <Github size={16} />
                  Code
                </a>
                <a 
                  href={project.live}
                  style={styles.projectLink}
                  onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <a 
          href="https://github.com/Zuriahn-Yun"
          style={styles.githubButton}
          onMouseEnter={(e) => {
            e.target.style.borderColor = '#4B5563';
            e.target.style.backgroundColor = '#111827';
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = '#4B5563';
            e.target.style.backgroundColor = 'transparent';
          }}
        >
          <Github size={18} />
        </a>
      </div>
    </div>
  );

  return (
    <div style={styles.app}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Zuriahn Yun</div>
          <div style={styles.navLinks}>
            <button
              onClick={() => setCurrentPage('about')}
              style={{
                ...styles.navButton,
                ...(currentPage === 'about' ? styles.navButtonActive : {})
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = currentPage === 'about' ? '#ffffff' : '#9CA3AF'}
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage('projects')}
              style={{
                ...styles.navButton,
                ...(currentPage === 'projects' ? styles.navButtonActive : {})
              }}
              onMouseEnter={(e) => e.target.style.color = '#ffffff'}
              onMouseLeave={(e) => e.target.style.color = currentPage === 'projects' ? '#ffffff' : '#9CA3AF'}
            >
              Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        {currentPage === 'about' ? <AboutPage /> : <ProjectsPage />}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Zuriahn Yun. Built with React.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
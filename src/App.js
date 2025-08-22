import React, { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Link } from "lucide-react";

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState("about");

  // PROJECT DATA
  // TEST BUILD WITH - npm start
  // DEPLOY BUILD WITH - npm run deploy

  const projects = [
    {
      id: 1,
      title: "Crypto Dashboard",
      description:
        "A Flask API hosted on Render that fetches cryptocurrency data from CoinGecko to provide traditional and Heiken Ashi candlestick data for the last 24 hours. The frontend, hosted on GitHub Pages, displays interactive charts for any public crypto coin.",
      tech: ["Python", "Render","Flask","HTML"],
      github: "https://github.com/Zuriahn-Yun/Crypto-Engineering",
      live: "https://zuriahn-yun.github.io/Crypto-Dashboard/", 
      image: process.env.PUBLIC_URL + "/Images/Crypto-Dashboard.png", // Add your image path here
    },
    {
      id: 2,
      title: "Crowd Vision",
      description:
        "Built a full-stack hackathon project integrating the Llama API with a custom ensemble backend (GRID-based CNN → API → RAG pipeline) for real-time crowd analysis. The system extracts image and textual data, performs scenario assessments (heatmaps, danger zones), and generates detailed automated reports.",
      tech: ["Python", "Llama 4 API"],
      github: "https://github.com/israelavendanojr/llama-hackathon",
      live: "https://www.youtube.com/watch?v=bUo0xOwCAI0&list=LL&index=2&ab_channel=israeljrvideos", 
      image: process.env.PUBLIC_URL + "/Images/CROWD VISION IMAGE.png", // Add your image path here
    },
    {
      id: 3,
      title: "Neural Network",
      description:
        "Implemented a deep neural network from scratch in Python, including forward/backward propagation, gradient descent, activation functions, and loss computation without using high-level ML frameworks.",
      tech: ["Python", "Numpy"],
      image: process.env.PUBLIC_URL + "/Images/NeuralNetwork.jpg", // Add your image path here
    },
    {
      id: 4,
      title: "Qubit Simulation",
      description:
        "Developed a Python simulator for a single qubit that models quantum states and observables as Hermitian matrices. It also creates random Hermitian Matrices. This project provides a foundation for future extensions to qubit systems.",
      tech: ["Python", "Numpy"],
      github: "https://github.com/Zuriahn-Yun/Sample-Based-Quantum-Diagonalization-Simulation/tree/main",
      image: process.env.PUBLIC_URL + "/Images/SQD.jpg", // Add your image path here
    },
    {
      id: 5,
      title: "Pathora",
      description:
        "Developed the backend of a full-stack web application during a 6-hour hackathon using Python and React, integrating an AI agent to generate personalized learning pathways and increase accessibility to education.",
      tech: ["React", "Python", "Flask"],
      github: "https://github.com/israelavendanojr/pathora",
      image: process.env.PUBLIC_URL + "/Images/mountain.jpg", // Add your image path here
    },
    {
      id: 6,
      title: "Gram Stain Processing Pipeline",
      description:
        "Developed scalable Python-based image analysis pipelines using Pillow to study gut proliferation in ASD and WT mouse models, assessing the effects of CBD and terspene therapy. Enabled efficient, team-wide access to high-throughput analysis results.",
      tech: ["Python", "Pandas", "Pillow"],
      github: "https://github.com/Zuriahn-Yun/Gram-Stain-Pipeline",
      live: "#",
      image:
        process.env.PUBLIC_URL + "/Images/day11_image1_mouseRJ1-8_ch00_SV.jpg", // Add your image path here
    },
    {
      id: 7,
      title: "Quantifying the Effects of Building Features on Energy Usage",
      description:
        "Created a regression model to predict how much energy a building uses based on things like size, temperature, and number of people. Found that building type and square footage had the biggest impact, and the model gave reliable, accurate results.",
      tech: ["Minitab"],
      github: process.env.PUBLIC_URL + "/Images/342 Final Project.pdf",
      image:
        process.env.PUBLIC_URL + "/Images/linear_regression.png", // Add your image path here
    },
    {
      id: 8,
      title: "Probability of Models in Practice: Poisson Vs Binomial Distribution",
      description:
        "Compared the Binomial and Poisson distributions by analyzing their behavior across varying parameters using statistical methods like mean comparison and R² from curve fitting. Found that while both distributions can model discrete events, their fit and accuracy vary significantly depending on event probability and sample size.",
      tech: ["R Studio"],
      github: process.env.PUBLIC_URL + "/Images/Probability of Models in Practice.pdf",
      image:
        process.env.PUBLIC_URL + "/Images/Poisson.jpg", // Add your image path here
    },
    {
      id: 9,
      title: "Schedule Automation with Microsoft Teams integration",
      description:
        "I developed five streamlined Microsoft Power Automate workflows for the WWU IT department, integrated with Microsoft Teams. These workflows feature a clean, scalable design that enables easy copy paste deployment, deletion, and scheduling making it simple to manage and reuse automation across teams with minimal setup.",
      tech: ["Microsoft Power Automate","Low Code Environment"],
      github: "#",
      live: "#",
      image:
        process.env.PUBLIC_URL + "/Images/PowerAutomate.png", // Add your image path here
    },
    {
      id: 10,
      title: "Java trading Simulation with SQL Integration",
      description:
        "I created a Java program that connects to a MySQL database to pull historical stock data and simulate basic trading activity. It adjusts for stock splits, uses moving averages, and runs buy/sell decisions over time.",
      tech: ["Java","SQL"],
      github: "#",
      live: "#",
      image:
        process.env.PUBLIC_URL + "/Images/stock.jpg", // Add your image path here
    },
    {
      id: 11,
      title: "IOS Word Hunt Solver",
      description:
        "Sick of losing IOS word hunt. Once you input all the letters in your word hunt game it uses DFS to find all possible words while cross referencing an English Dictionary. I still lose but this was fun.",
      tech: ["Python"],
      github: "https://github.com/Zuriahn-Yun/WordHuntSolver/blob/main/solver.py",
      live: "#",
      image:
        process.env.PUBLIC_URL + "/Images/JsxLT.jpg", // Add your image path here
    },
    {
      id: 12,
      title: "Phylogetic Tree",
      description:
        "Built a Java application to generate a complete phylogenetic tree from genetic data using agglomerative clustering. Starting with a forest of single-node trees each representing a species, the program calculates pairwise genetic distances and iteratively merges the closest trees until a single, comprehensive phylogenetic tree is formed. ",
      tech: ["Java"],
      github: "",
      live: "#",
      image:
        process.env.PUBLIC_URL + "/Images/phylogenetic.png", // Add your image path here
    },
    {
      id: 13,
      title: "Racket Interpreter",
      description:
        "Designed and implemented a full interpreter and parser for the Racket language, written entirely in Racket from scratch. This project involved constructing a complete parsing pipeline, managing lexical scope and evaluation rules.",
      tech: ["Racket"],
      github: "",
      live: "#",
      image:
        process.env.PUBLIC_URL + "/Images/racket.png", // Add your image path here
    }
  ];

  const styles = {
    app: {
      minHeight: "100vh",
      backgroundColor: "#000000",
      color: "#ffffff",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    nav: {
      borderBottom: "1px solid #374151",
      padding: "0 20px",
    },
    navContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "24px 0",
    },
    logo: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    navLinks: {
      display: "flex",
      gap: "32px",
    },
    navButton: {
      background: "none",
      border: "none",
      color: "#9CA3AF",
      fontWeight: "500",
      cursor: "pointer",
      fontSize: "16px",
      transition: "color 0.2s ease",
    },
    navButtonActive: {
      color: "#ffffff",
    },
    main: {
      padding: "64px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    aboutContainer: {
      textAlign: "center",
      maxWidth: "800px",
      margin: "0 auto",
    },
    mainTitle: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "24px",
      lineHeight: "1.2",
    },
    mainParagraph: {
      fontSize: "20px",
      color: "#D1D5DB",
      lineHeight: "1.6",
      marginBottom: "48px",
      maxWidth: "600px",
      margin: "0 auto 48px",
    },
    socialLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "24px",
      marginBottom: "48px",
    },
    socialLink: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#9CA3AF",
      textDecoration: "none",
      transition: "color 0.2s ease",
    },
    viewWorkButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      backgroundColor: "#ffffff",
      color: "#000000",
      padding: "12px 24px",
      borderRadius: "8px",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.2s ease",
    },
    projectsContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    projectsHeader: {
      marginBottom: "48px",
    },
    projectsTitle: {
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "16px",
    },
    projectsSubtitle: {
      color: "#9CA3AF",
      fontSize: "18px",
    },
    projectsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px",
      marginBottom: "48px",
    },
    projectCard: {
      backgroundColor: "#111827",
      borderRadius: "8px",
      border: "1px solid #374151",
      overflow: "hidden",
      transition: "border-color 0.2s ease",
    },
    projectImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      backgroundColor: "#374151",
    },
    projectContent: {
      padding: "24px",
    },
    projectTitle: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "12px",
    },
    projectDescription: {
      color: "#9CA3AF",
      fontSize: "14px",
      lineHeight: "1.5",
      marginBottom: "16px",
    },
    techTags: {
      display: "flex",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "24px",
    },
    techTag: {
      padding: "4px 8px",
      backgroundColor: "#374151",
      color: "#D1D5DB",
      fontSize: "12px",
      borderRadius: "4px",
    },
    projectLinks: {
      display: "flex",
      gap: "16px",
    },
    projectLink: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      color: "#9CA3AF",
      textDecoration: "none",
      fontSize: "14px",
      transition: "color 0.2s ease",
    },
    githubButton: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      border: "1px solid #4B5563",
      color: "#ffffff",
      padding: "12px 24px",
      borderRadius: "8px",
      fontWeight: "500",
      backgroundColor: "transparent",
      cursor: "pointer",
      fontSize: "16px",
      textDecoration: "none",
      transition: "border-color 0.2s ease, background-color 0.2s ease",
    },
    footer: {
      borderTop: "1px solid #374151",
      marginTop: "80px",
      padding: "32px 20px",
      textAlign: "center",
      color: "#9CA3AF",
    },
  };

  const AboutPage = () => (
    <div style={styles.aboutContainer}>
      <h1 style={styles.mainTitle}>About Me</h1>
      <p style={styles.mainParagraph}>
        I'm a Data Science undergraduate with minors in Economics and
        Mathematics at Western Washington University. I currently conduct
        neuroscience research in the Kaplan Lab, focusing on image analysis and
        experimental data processing. Starting this fall, I will begin work on
        software vulnerability detection and cognitive training research,
        exploring the intersection of human error and AI.
      </p>

      <div style={styles.socialLinks}>
        <a
          href="https://github.com/Zuriahn-Yun"
          style={styles.socialLink}
          onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.target.style.color = "#9CA3AF")}
        >
          <Github size={20} />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/zuriahnyun/"
          style={styles.socialLink}
          onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.target.style.color = "#9CA3AF")}
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
        <a
          href="mailto:yunzuriahn@gmail.com"
          style={styles.socialLink}
          onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.target.style.color = "#9CA3AF")}
        >
          <Mail size={20} />
          Contact
        </a>
      </div>

      <button
        style={styles.viewWorkButton}
        onClick={() => setCurrentPage("projects")}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#E5E7EB")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ffffff")}
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
        <p style={styles.projectsSubtitle}></p>
      </div>

      <div style={styles.projectsGrid}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={styles.projectCard}
            onMouseEnter={(e) => (e.target.style.borderColor = "#4B5563")}
            onMouseLeave={(e) => (e.target.style.borderColor = "#374151")}
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
              <p style={styles.projectDescription}>{project.description}</p>

              <div style={styles.techTags}>
                {project.tech.map((tech) => (
                  <span key={tech} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              <div style={styles.projectLinks}>
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.projectLink}
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.projectLink}
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center" }}>
        <a
          href="https://github.com/Zuriahn-Yun"
          style={styles.githubButton}
          onMouseEnter={(e) => {
            e.target.style.borderColor = "#4B5563";
            e.target.style.backgroundColor = "#111827";
          }}
          onMouseLeave={(e) => {
            e.target.style.borderColor = "#4B5563";
            e.target.style.backgroundColor = "transparent";
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
              onClick={() => setCurrentPage("about")}
              style={{
                ...styles.navButton,
                ...(currentPage === "about" ? styles.navButtonActive : {}),
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  currentPage === "about" ? "#ffffff" : "#9CA3AF")
              }
            >
              About
            </button>
            <button
              onClick={() => setCurrentPage("projects")}
              style={{
                ...styles.navButton,
                ...(currentPage === "projects" ? styles.navButtonActive : {}),
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) =>
                (e.target.style.color =
                  currentPage === "projects" ? "#ffffff" : "#9CA3AF")
              }
            >
              Projects
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        {currentPage === "about" ? <AboutPage /> : <ProjectsPage />}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Zuriahn Yun.</p>
      </footer>
    </div>
  );
};

export default Portfolio;

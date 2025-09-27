import '../Projects.css';
import project1Image from '../assets/project1.jpg';
import project2Image from '../assets/project2.jpg';
import project3Image from '../assets/project3.jpg';
import project4Image from '../assets/project4.jpg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "React Portfolio Website",
            description: "Developed a 6-page responsive portfolio with React Router and modern CSS design.",
            technologies: "React.js, JavaScript, CSS3, HTML5",
            role: "Full-stack Developer",
            outcome: "Successfully deployed portfolio showcasing web development skills",
            image: project1Image
        },
        {
            id: 2,
            title: "E-Commerce Website",
            description: "Developed a fully responsive e-commerce website with shopping cart functionality and user authentication.",
            technologies: "React.js, JavaScript, CSS3, HTML5",
            role: "Full-stack Developer",
            outcome: "Successfully deployed and received positive feedback for user experience.",
            image: project2Image
        },
        {
            id: 3,
            title: "Task Manager Application",
            description: "Interactive task management app with local storage persistence and theme switching.",
            technologies: "JavaScript, Local Storage API, DOM Manipulation",
            role: "Frontend Developer",
            outcome: "Functional task manager demonstrating JavaScript proficiency",
            image: project3Image
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "Real-time weather application with API integration and dynamic UI updates.",
            technologies: "JavaScript, Fetch API, JSON, Async/Await",
            role: "Frontend Developer",
            outcome: "Working weather app with geolocation services",
            image: project4Image
        }
    ];

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image} alt={project.title} className="project-img" />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-details">
                                <p><strong>Technologies:</strong> {project.technologies}</p>
                                <p><strong>My Role:</strong> {project.role}</p>
                                <p><strong>Outcome:</strong> {project.outcome}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
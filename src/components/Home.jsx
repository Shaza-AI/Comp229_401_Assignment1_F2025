import { Link } from 'react-router-dom';
import '../Home.css';

const Home = () => {
    return (
    <div className="home-container">
        <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p className="mission-statement">
            "I am passionate about creating innovative web solutions that 
            make a difference. My mission is to develop user-friendly 
            applications that solve real-world problems."
        </p>
        <p>
            Hi! I'm a Sofftware Engineering Technology student passionate about creating 
            amazing digital experiences. Explore my portfolio to learn 
            more about my skills and projects.
        </p>
        <div className="home-buttons">
            <Link to="/aboutme" className="btn-primary">Learn More About Me</Link>
            <Link to="/projects" className="btn-secondary">View My Projects</Link>
        </div>
        </div>
    </div>
    );
}

export default Home;
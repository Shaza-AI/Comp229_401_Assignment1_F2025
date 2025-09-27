import '../About.css';
import profilePhoto from '../assets/profile-photo.jpg';

const About = () => {
  
    const handleResumeDownload = () => {
        window.open('/resume.pdf', '_blank');
    };
    
        return (
    <div className="about-container">
        <div className="about-content">
        <h1>About Me</h1>
        
        <div className="about-profile">
            <div className="profileimage">
            {/* Placeholder for profile image */}
            <div className="image-placeholder">
                <span>Profile Image</span>
                <img src={profilePhoto} alt="Shaza El-Hayek" className="profile-photo" />
            </div>
            </div>
            
            <div className="profile-info">
            <h2>Shaza El-Hayek</h2>
            <p>
                Software Engineering Technology student at Centennial College with 
                expertise in web development technologies including React.js, JavaScript, 
                and modern CSS. Passionate about creating user-friendly applications 
                and currently expanding skills in Java and Python development.
            </p>
            <p>
                When I'm not coding, I enjoy learning about new technologies, reading tech blogs, 
                and working on personal projects to enhance my skills.
            </p>
            
            <button onClick={handleResumeDownload} className="resume-btn">
                Download My Resume (PDF)
            </button>
            </div>
        </div>
        </div>
    </div>
    );
}

export default About;
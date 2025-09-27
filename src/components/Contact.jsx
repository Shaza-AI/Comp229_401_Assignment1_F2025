import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Contact.css';

const Contact = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! You will be redirected to the home page.');
    navigate('/');
    };

    return (
    <div className="contact-container">
        <div className="contact-content">
        <div className="contact-info">
            <h1>Contact Me</h1>
            <div className="contact-details">
            <h3>Get in Touch</h3>
            <p><strong>Email:</strong> shaza.elhayek@email.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Location:</strong> Toronto, Ontario</p>
            <p><strong>LinkedIn:</strong> linkedin.com/in/shazaelhayek</p>
            </div>
        </div>
        
        <div className="contact-form">
                <h3>Send me a message</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                </div>
            </div>
            
            <div className="form-row">
                <div className="form-group">
                <label htmlFor="contactNumber">Contact Number</label>
                <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>
            </div>
            
            <div className="form-group">
                    <label htmlFor="message">Message</label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
        </div>
    </div>
    );
}

export default Contact;
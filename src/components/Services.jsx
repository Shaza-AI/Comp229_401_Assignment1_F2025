import '../Services.css';

const Services = () => {
    const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Custom website development using modern technologies like React, HTML5, CSS3, and JavaScript.",
        image: "web-dev"
    },
    {
        id: 2,
        title: "Responsive Design",
        description: "Creating websites that work perfectly on all devices - desktops, tablets, and mobile phones.",
        image: "responsive"
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "Designing user-friendly interfaces with focus on user experience and accessibility.",
        image: "ui-ux"
    },
    {
        id: 4,
        title: "Website Maintenance",
        description: "Ongoing support and maintenance for existing websites to ensure optimal performance.",
        image: "maintenance"
    }
    ];

    return (
    <div className="services-container">
        <h1>Services I Offer</h1>
        <div className="services-grid">
        {services.map(service => (
            <div key={service.id} className="service-card">
            <div className="service-image">
                <div className="image-placeholder">
                <span>{service.image}</span>
                </div>
            </div>
            <div className="service-info">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}

export default Services;
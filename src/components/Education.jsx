import '../Education.css';

const Education = () => {
    const education = [
    {
        id: 1,
        institution: "Centennial College",
        degree: "Advanced Diploma in Software Engineering Technology",
        duration: "2023 - Online",
        details: "Focus on web development, database design, and software engineering principles."
    },
    {
        id: 2,
        institution: "High School Diploma",
        degree: "Science and Technology Program",
        duration: "2019 - 2022",
        details: "Graduated with honors, with focus on mathematics and computer science."
    },
    {
        id: 3,
        institution: "Online Certifications",
        degree: "Various Web Development Courses",
        duration: "2021 - Online",
        details: "Completed courses in React, JavaScript, HTML/CSS, and responsive design."
    }
    ];

    return (
    <div className="education-container">
        <h1>Education & Qualifications</h1>
        <div className="education-list">
        {education.map(edu => (
            <div key={edu.id} className="education-item">
            <div className="education-header">
                <h3>{edu.institution}</h3>
                <span className="duration">{edu.duration}</span>
            </div>
            <p className="degree">{edu.degree}</p>
            <p className="details">{edu.details}</p>
            </div>
        ))}
        </div>
    </div>
    );
}

export default Education;
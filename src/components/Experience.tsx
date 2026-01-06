import React from 'react';
import Section from './Section';

const experiences = [
    {
        role: "Python - Django Developer",
        company: "Steyp / Talrop", // Inferred from context in Accomplishments 'I work as a Full Stack Support Engineer at Steyp'
        location: "Kochi, India",
        period: "12/2022 - Current",
        description: [
            "Creating a complete backend for learning platforms and e-commerce apps.",
            "Creating REST APIs using django-rest-framework.",
            "Authentication using jwt, oAuth2.",
            "Payment Gateway Integrations (CashFree, Stripe, Razorpay, Phonepay).",
            "Search Technologies: Elasticsearch, Typesense.",
            "DevOps & Version Control: Docker, Git, GitHub, GitLab, Amazon S3.",
            "Collaborated with front-end developers to ensure seamless integration.",
            "Mentors and coaches junior developers in architecture and project management."
        ]
    },
    {
        role: "Full Stack - Developer Intern",
        company: "Steyp",
        location: "Trivandrum, India",
        period: "04/2022 - 12/2022",
        description: [
            "Full stack development intern covering UI engineering, backend engineering, DevOps, and web/mobile app development.",
            "Worked on building entire websites from start to finish.",
            "Gained experience in creating and maintaining monolithic and microservices architecture."
        ]
    }
];

const Experience = () => {
    return (
        <Section id="experience" title="Professional Experience" subtitle="My journey in the software development industry.">
            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div key={index} className="glass-card p-8 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                <p className="text-lg text-secondary font-medium">{exp.company} | {exp.location}</p>
                            </div>
                            <div className="mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                                {exp.period}
                            </div>
                        </div>
                        <ul className="space-y-3">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-400">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;

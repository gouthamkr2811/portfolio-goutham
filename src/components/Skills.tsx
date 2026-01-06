import React from 'react';
import Section from './Section';

const skills = [
    { name: "Python / Django", level: "Expert" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML / CSS", level: "Advanced" },
    { name: "React Native", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Sass", level: "Intermediate" },
    { name: "Bootstrap", level: "Advanced" },
    { name: "jQuery", level: "Intermediate" },
    { name: "REST APIs", level: "Expert" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "Git / GitHub", level: "Advanced" },
];

const Skills = () => {
    return (
        <Section id="skills" title="Skills & Expertise" subtitle="A collection of technologies I work with to build robust solutions.">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="glass p-6 rounded-2xl text-center hover:bg-white/5 transition-all cursor-default group">
                        <h3 className="text-lg font-semibold text-gray-200 group-hover:text-primary transition-colors">{skill.name}</h3>
                        {/* <p className="text-sm text-gray-500 mt-2">{skill.level}</p> */}
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;

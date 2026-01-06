"use client";

import React, { useRef } from 'react';
import Section from './Section';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    SiPython, SiDjango, SiJavascript, SiHtml5, SiCss3,
    SiReact, SiDocker, SiSass, SiBootstrap, SiJquery,
    SiPostgresql, SiGithub
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    { name: "Python / Django", level: "Expert", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", level: "Advanced", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML / CSS", level: "Advanced", icon: SiHtml5, color: "#E34F26" },
    { name: "React Native", level: "Intermediate", icon: SiReact, color: "#61DAFB" },
    { name: "Docker", level: "Intermediate", icon: SiDocker, color: "#2496ED" },
    { name: "React.js", level: "Intermediate", icon: SiReact, color: "#61DAFB" },
    { name: "Sass", level: "Intermediate", icon: SiSass, color: "#CC6699" },
    { name: "Bootstrap", level: "Advanced", icon: SiBootstrap, color: "#7952B3" },
    { name: "jQuery", level: "Intermediate", icon: SiJquery, color: "#0769AD" },
    { name: "REST APIs", level: "Expert", icon: TbApi, color: "#7F52FF" },
    { name: "PostgreSQL", level: "Advanced", icon: SiPostgresql, color: "#4169E1" },
    { name: "Git / GitHub", level: "Advanced", icon: SiGithub, color: "#ffffff" },
];

const Skills = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const items = gsap.utils.toArray('.skill-item');

        gsap.fromTo(items,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                }
            }
        );
    }, { scope: container });

    return (
        <Section id="skills" title="Skills & Expertise" subtitle="A collection of technologies I work with to build robust solutions.">
            <div ref={container} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="skill-item glass p-6 rounded-2xl text-center hover:bg-white/5 transition-all duration-300 cursor-default group relative overflow-hidden"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        <div
                            className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000 ease-in-out pointer-events-none"
                            style={{ background: `linear-gradient(to right, transparent, ${skill.color}20, transparent)` }}
                        ></div>

                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:scale-110 transition-transform duration-300" style={{ boxShadow: `0 0 20px ${skill.color}20` }}>
                                <skill.icon className="text-4xl transition-colors duration-300" style={{ color: skill.color }} />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;

"use client";

import React, { useRef } from 'react';
import Section from './Section';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaMobileAlt, FaServer } from 'react-icons/fa';

const projects = [
    {
        title: "Steyp.com",
        category: "EdTech Platform",
        description: "A comprehensive Digital University platform built with a microservice architecture. It facilitates large-scale student learning, progress tracking, and interactive content delivery.",
        tags: ["Microservices", "Backend", "Architecture", "Scalability"],
        link: "https://steyp.com",
        github: "#",
        icon: <FaServer className="text-5xl text-white/80" />,
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "Pet To Place",
        category: "E-commerce Mobile App",
        description: "A cross-platform React Native app connecting pet owners with service providers. Features include real-time chat, geolocation services, and secure in-app payments.",
        tags: ["React Native", "Mobile", "Real-time Chat", "Payments"],
        link: "#",
        github: "#",
        icon: <FaMobileAlt className="text-5xl text-white/80" />,
        color: "from-purple-600 to-pink-600"
    },
    {
        title: "Hosface",
        category: "Healthcare Application",
        description: "An integrated healthcare platform acting as a bridge between patients and doctors. Supports video consultations, appointment scheduling, and a robust admin dashboard.",
        tags: ["Flutter Flow", "Video Calls", "Typesense", "Healthcare"],
        link: "#",
        github: "#",
        icon: <FaLaptopCode className="text-5xl text-white/80" />,
        color: "from-emerald-600 to-teal-600"
    }
];

const Projects = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            }
        });

        tl.from(".project-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        });

    }, { scope: container });

    return (
        <Section id="projects" title="Featured Projects" subtitle="A curated selection of my work in web and mobile development.">
            <div ref={container} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="project-card group hover:-translate-y-2 transition-transform duration-500">
                        <div className="h-full glass-card rounded-3xl overflow-hidden flex flex-col border border-white/5 relative">

                            {/* Visual Header */}
                            <div className={`relative h-56 bg-gradient-to-br ${project.color} p-8 flex items-center justify-center overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10"></div>
                                {/* Decorative Circles */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/20 rounded-full blur-2xl"></div>

                                <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <div className="p-6 glass rounded-2xl shadow-xl border border-white/20">
                                        {project.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col relative">
                                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/50 to-transparent pointer-events-none"></div>

                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-primary border border-white/5 uppercase tracking-wider">
                                        {project.category}
                                    </span>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors" title="View Code">
                                            <FaGithub className="text-xl" />
                                        </a>
                                        <a href={project.link} className="text-gray-400 hover:text-white transition-colors" title="Live Demo">
                                            <FaExternalLinkAlt className="text-lg" />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-default">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;

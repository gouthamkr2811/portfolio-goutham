"use client";

import React, { useRef } from 'react';
import Section from './Section';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaUniversity, FaHtml5, FaServer, FaCloud, FaGlobe, FaMobileAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const education = [
    {
        degree: "Bachelor Of Arts: Economics",
        institution: "Calicut University", // Assuming Calicut University based on region (Kuttanellur/Kerala) or generic placeholder
        location: "Kerala",
        year: "Present",
        description: "Currently pursuing Bachelor of Arts in Economics. Deepening understanding of economic theories and financial systems.",
        icon: <FaGraduationCap className="text-4xl text-primary" />
    },
    {
        degree: "Higher Secondary Education",
        institution: "St. Augustine H.S.S",
        location: "Kuttanellur",
        year: "2018 - 2020",
        description: "Completed higher secondary education with focus on Humanities/Commerce.",
        icon: <FaUniversity className="text-4xl text-secondary" />
    }
];

const certifications = [
    {
        title: "UI Engineer Certification",
        issuer: "Steyp",
        link: "#",
        id: "01",
        color: "from-blue-500 to-cyan-500",
        icon: <FaHtml5 className="text-xl text-white" />
    },
    {
        title: "Backend Developer Certification",
        issuer: "Steyp",
        link: "https://steyp.com/certification/a0usxx8jgdwqyzyvmrpo/",
        id: "02",
        color: "from-purple-500 to-pink-500",
        icon: <FaServer className="text-xl text-white" />
    },
    {
        title: "DevOps Engineer Certification",
        issuer: "Steyp",
        link: "https://steyp.com/certification/894dgcp0pn019xgorf9f/",
        id: "03",
        color: "from-orange-500 to-red-500",
        icon: <FaCloud className="text-xl text-white" />
    },
    {
        title: "Web Application Developer",
        issuer: "Steyp",
        link: "https://steyp.com/certification/8lbtyh4gga7cfaq33l2i/",
        id: "04",
        color: "from-green-500 to-emerald-500",
        icon: <FaGlobe className="text-xl text-white" />
    },
    {
        title: "Mobile Application Developer",
        issuer: "Steyp",
        link: "https://steyp.com/certification/796hv6x13lnhld41iwbi/",
        id: "05",
        color: "from-indigo-500 to-violet-500",
        icon: <FaMobileAlt className="text-xl text-white" />
    }
];

const Education = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".edu-card", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".cert-card", {
            scrollTrigger: {
                trigger: ".cert-section",
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        });

    }, { scope: container });

    return (
        <Section id="education" title="Education & Certifications" subtitle="My academic journey and professional validations.">
            <div ref={container} className="space-y-16">

                {/* Education Block */}
                <div className="edu-section">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                            <FaUniversity className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Education</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {education.map((edu, index) => (
                            <div key={index} className="edu-card glass-card p-8 rounded-3xl relative overflow-hidden group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02]">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110"></div>

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 glass rounded-2xl group-hover:bg-primary/20 transition-colors duration-300">
                                            {edu.icon}
                                        </div>
                                        <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 group-hover:border-primary/30 transition-colors">
                                            {edu.year}
                                        </span>
                                    </div>

                                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{edu.degree}</h4>
                                    <p className="text-primary font-medium mb-4 flex items-center gap-2">
                                        {edu.institution}, {edu.location}
                                    </p>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Block */}
                <div className="cert-section">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 rounded-xl bg-accent/10 text-accent">
                            <FaCertificate className="text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Certifications</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-card group block relative perspective-1000"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl transform transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-accent/10"></div>
                                <div className="glass-card p-6 rounded-2xl h-full border border-white/5 hover:border-white/20 transition-all duration-300 relative overflow-hidden group-hover:-translate-y-2">

                                    {/* Gradient Accent Line */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color} opacity-80 group-hover:h-[2px] transition-all`}></div>

                                    <div className="flex justify-between items-start mb-4 mt-2">
                                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cert.color} p-[1px] transform transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110`}>
                                            <div className="w-full h-full bg-black/90 rounded-[7px] flex items-center justify-center">
                                                {cert.icon}
                                            </div>
                                        </div>
                                        <FaExternalLinkAlt className="text-gray-500 group-hover:text-white transition-colors text-sm group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </div>

                                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                        {cert.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{cert.issuer}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </Section>
    );
};

export default Education;

"use client";

import React, { useRef, useState } from 'react';
import Section from './Section';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaPlus, FaMinus, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: "01",
        role: "Python - Django Developer",
        company: "Steyp / Talrop",
        location: "Kochi, India",
        period: "12/2022 - Current",
        description: [
            "Architecting and developing robust backends for comprehensive learning platforms and high-traffic e-commerce applications.",
            "Designing and implementing scalable RESTful APIs using Django Rest Framework.",
            "Implementing secure authentication systems utilizing JWT and OAuth2 protocols.",
            " integrating multiple payment gateways including CashFree, Stripe, Razorpay, and PhonePe.",
            "Optimizing search functionality with Elasticsearch and Typesense.",
            "Collaborating closely with frontend teams for seamless API integration."
        ]
    },
    {
        id: "02",
        role: "Full Stack - Developer Intern",
        company: "Steyp",
        location: "Trivandrum, India",
        period: "04/2022 - 12/2022",
        description: [
            "Immersive internship covering the full spectrum of development: UI Engineering, Backend Engineering, and DevOps.",
            "Built and deployed complete web applications from concept to production.",
            "Developed responsive mobile-first interfaces and robust server-side logic."
        ]
    }
];

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0], index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`border-b border-white/10 group ${isOpen ? 'bg-white/5' : 'hover:bg-white/5'} transition-colors duration-300`}
        >
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="py-10 px-6 cursor-pointer flex flex-col md:flex-row gap-6 md:items-center justify-between"
            >
                <div className="flex items-start md:items-center gap-6 md:gap-12 flex-grow">
                    <span className={`text-2xl md:text-4xl font-black transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-700 group-hover:text-gray-500'}`}>
                        {exp.id}
                    </span>

                    <div className="flex flex-col">
                        <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                            {exp.role}
                        </h3>
                        <p className="text-lg text-gray-500 mt-1 flex items-center gap-2">
                            {exp.company}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto">
                    <div className="text-right">
                        <div className="text-gray-300 font-medium whitespace-nowrap">{exp.period}</div>
                        <div className="text-sm text-gray-500">{exp.location}</div>
                    </div>

                    <button className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-transparent text-gray-400 group-hover:border-white/30 group-hover:text-white'}`}>
                        {isOpen ? <FaMinus /> : <FaPlus />}
                    </button>
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-10 pl-20 md:pl-32 pr-6 md:pr-32">
                    <div className="pt-6 border-t border-white/5">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {exp.description.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Experience = () => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".experience-item", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power3.out"
        });
    }, { scope: container });

    return (
        <Section id="experience" title="Professional Experience" subtitle="My career trajectory and key milestones.">
            <div ref={container} className="container mx-auto max-w-5xl">
                <div className="border-t border-white/10">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <ExperienceItem exp={exp} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;

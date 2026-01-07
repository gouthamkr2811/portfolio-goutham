"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Section from '@/components/Section';
import Image from 'next/image';
import HeroImage from '../../../public/images/profile1.jpeg';
import Profile2 from '../../../public/images/profile3.jpeg';
import Profile3 from '../../../public/images/profile2.jpeg';
import Profile4 from '../../../public/images/profile4.jpeg';
import Profile5 from '../../../public/images/profile5.jpeg';
import Profile6 from '../../../public/images/profile6.jpeg';

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-black pt-24 pb-12">
            <div className="container mx-auto px-6">

                {/* Intro Section */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-4 bg-gray-800 rounded-full overflow-hidden border-4 border-white/10 flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                                <Image
                                    src={HeroImage}
                                    alt='hero_image'
                                    fill
                                    className="object-cover"
                                />
                                {/* User should replace this div with: <img src="/path/to/photo.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-10 w-6 h-6 bg-accent rounded-full blur-lg animate-float"></div>
                            <div className="absolute bottom-10 left-0 w-8 h-8 bg-primary rounded-full blur-lg animate-pulse"></div>
                        </div>
                    </div>

                    {/* Bio & Socials */}
                    <div className="w-full lg:w-1/2">
                        <h5 className="text-primary font-bold uppercase tracking-widest mb-2">Who I Am</h5>
                        <h1 className="text-5xl font-black text-white mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Goutham</span>.
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            I am a passionate Full Stack Developer with a knack for building robust and scalable web applications. My journey in tech started with a curiosity for how things work, which led me to dive deep into backend architectures and modern frontend frameworks.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed mb-8">
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or gaming. I believe in continuous learning and pushing the boundaries of what's possible on the web.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-white hover:text-black transition-all duration-300 group">
                                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-[#0077b5] hover:text-white transition-all duration-300 group">
                                <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-[#E1306C] hover:text-white transition-all duration-300 group">
                                <FaInstagram className="text-xl group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 group">
                                <FaTwitter className="text-xl group-hover:scale-110 transition-transform" />
                            </a>
                        </div>

                        <a href="/resume.pdf" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Download Portfolio
                        </a>
                    </div>
                </div>

                {/* Gallery Grid (Placeholder) */}
                <Section id="gallery" title="Snapshots" subtitle="A glimpse into my life outside of code.">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
                        {/* Large Main Photo */}
                        <div className="glass-card rounded-2xl col-span-2 row-span-2 relative overflow-hidden group">
                            <Image
                                src={Profile2}
                                alt="Coding setup"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                        </div>

                        {/* Top Row Right */}
                        <div className="glass-card rounded-2xl relative overflow-hidden group">
                            <Image
                                src={Profile3}
                                alt="Conference talk"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="glass-card rounded-2xl relative overflow-hidden group">
                            <Image
                                src={Profile4}
                                alt="Team meeting"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        {/* Bottom Row Right */}
                        <div className="glass-card rounded-2xl relative overflow-hidden group">
                            <Image
                                src={Profile5}
                                alt="Travel shot"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="glass-card rounded-2xl relative overflow-hidden group">
                            <Image
                                src={Profile6}
                                alt="Hobby shot"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </Section>
            </div>
        </main>
    );
};

export default AboutPage;

import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="z-10 px-6 mt-16">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-primary/20 text-primary text-sm font-medium">
                    Available for new opportunities
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                    Hi, I'm <span className="text-gradient">Goutham Raveendran</span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    <span className="text-white font-semibold">Python - Django Developer</span> with deep code experience.
                    Mentors and coaches junior developers in architecture and project management.
                </p>

                <p className="text-gray-400 mb-10 max-w-lg mx-auto">
                    Hardworking with excellent communication and collaboration skills. Based in Thrissur, India.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#projects" className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
                        View Work
                    </a>
                    <a href="https://www.linkedin.com/in/gouthaman-kr" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full glass hover:bg-white/10 transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:gouthamraveendran123g@gmail.com" className="px-8 py-3 rounded-full glass hover:bg-white/10 transition-colors">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;

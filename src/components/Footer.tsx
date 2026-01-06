import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <p className="mb-2">© {new Date().getFullYear()} Goutham Raveendran. All rights reserved.</p>
                <p>Built with Next.js, Tailwind CSS & ♥️</p>
            </div>
        </footer>
    );
};

export default Footer;

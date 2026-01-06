"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Me', href: '/about' },
        { name: 'Skills', href: '/#skills' },
        { name: 'Experience', href: '/#experience' },
        { name: 'Education', href: '/#education' },
        { name: 'Work', href: '/#projects' },

    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-black/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="z-50 relative group">
                    <div className="text-3xl font-black tracking-tighter text-white border-2 border-white px-2 py-1 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        GK
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 hover:text-primary ${pathname === link.href ? 'text-primary' : 'text-gray-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        className="px-5 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 text-white text-2xl focus:outline-none"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold text-white hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        onClick={() => setIsOpen(false)}
                        className="px-8 py-3 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all"
                    >
                        Let's Talk
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;

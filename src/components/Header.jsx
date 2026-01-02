// ФАЙЛ: src/components/Header.jsx
"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState, useEffect } from "react";

export default function Header() {
    const { colors, company } = siteData;
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleConsultationClick = () => {
        const contactsSection = document.getElementById('контакты');
        if (contactsSection) contactsSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/10 py-3' 
                : 'bg-transparent py-4'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Логотип */}
                    <motion.div
                        className="flex items-center cursor-pointer"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <h1 className="text-2xl font-bold">
                            <span className="text-primary-500">ZAMAN</span>
                            <span className="text-secondary-500">Studio</span>
                        </h1>
                    </motion.div>

                    {/* Навигация */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {["услуги", "технологии", "достижения", "контакты"].map((item, i) => (
                            <motion.a
                                key={i}
                                href={`#${item}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="relative text-gray-300 hover:text-white font-medium transition-colors duration-200 text-sm"
                                whileHover={{ y: -2 }}
                                whileTap={{ y: 0 }}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </nav>

                    {/* Кнопка консультации */}
                    <motion.button
                        onClick={handleConsultationClick}
                        className="btn-gradient px-6 py-2.5 rounded-xl text-sm font-semibold"
                        whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 10px 30px rgba(79, 70, 229, 0.4)" 
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Консультация
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
}
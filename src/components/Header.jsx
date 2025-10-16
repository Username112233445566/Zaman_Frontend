"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState, useEffect } from "react";
import "../styles/Header.css";

export default function Header() {
    const { colors, company } = siteData;
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleConsultationClick = () => {
        const contactsSection = document.getElementById('контакты');
        if (contactsSection) {
            contactsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-inner">
                <motion.h1
                    className="logo"
                    style={{ textShadow: `0 0 5px ${colors.primary}55` }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    ZAMAN<span className="logo-accent">Studio</span>
                </motion.h1>

                <nav className="nav-links">
                    {["Услуги", "Технологии", "Достижения", "Контакты"].map((item, i) => (
                        <motion.a
                            key={i}
                            href={`#${item.toLowerCase()}`}
                            className="nav-link"
                            onClick={(e) => handleNavClick(e, item.toLowerCase())}
                            whileHover={{ y: -2 }}
                            whileTap={{ y: 0 }}
                        >
                            {item}
                        </motion.a>
                    ))}
                </nav>

                <motion.button
                    className="header-btn"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 0 }}
                    onClick={handleConsultationClick}
                >
                    Консультация
                </motion.button>
            </div>
        </header>
    );
}
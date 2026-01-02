"use client";
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Услуги", href: "#услуги" },
    { name: "Кейсы", href: "#кейсы" },
    { name: "Процесс", href: "#процесс" },
    { name: "Технологии", href: "#технологии" },
    { name: "Контакты", href: "#контакты" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-[#0A0A0F]/90 backdrop-blur-xl border-b border-white/5 py-3' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Логотип NexBit */}
          <motion.div
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-2xl font-bold">
              <span className="text-white">Nex</span>
              <span className="text-[#00D1FF]">Bit</span>
            </div>
            <div className="ml-2 w-2 h-2 bg-[#00D1FF] rounded-full animate-pulse" />
          </motion.div>

          {/* Десктопная навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href.slice(1))}
                className="relative text-gray-300 hover:text-white text-sm font-medium transition-colors group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00D1FF] to-[#7B61FF] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Кнопки */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => {
                const section = document.getElementById('контакты');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gradient px-6 py-3 rounded-xl text-sm font-semibold hidden md:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Обсудить проект
            </motion.button>
            
            {/* Мобильное меню */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 nexbit-card p-6"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.slice(1))}
                  className="text-gray-300 hover:text-white py-2 border-b border-white/5"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  const section = document.getElementById('контакты');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="btn-gradient py-3 rounded-xl font-semibold mt-4"
              >
                Обсудить проект
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
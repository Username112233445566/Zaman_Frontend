"use client";
import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function Header() {
  const { colors, company } = siteData;

  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <motion.h1 
          className="text-2xl font-extrabold text-indigo-600 cursor-pointer"
          style={{ textShadow: `0 0 5px ${colors.primary}55` }}
        >
          ZAMAN<span className="text-emerald-500">Studio</span>
        </motion.h1>
        
        <nav className="hidden md:flex gap-8 text-gray-200 font-medium">
          {["Услуги", "Технологии", "Достижения", "Контакты"].map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className="relative transition-colors hover:text-indigo-400"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <motion.button 
          className="bg-emerald-500 text-gray-900 px-6 py-2 rounded-xl font-semibold shadow-lg shadow-emerald-500/50 transition-all hover:shadow-emerald-500/70"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Консультация
        </motion.button>
      </div>
    </header>
  );
}
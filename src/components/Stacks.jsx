// ФАЙЛ: src/components/Stacks.jsx
"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState } from "react";

export default function Stacks() {
    const { technologies } = siteData;
    const [hoveredTech, setHoveredTech] = useState(null);

    const getTechName = (tech) => {
        const techNames = {
            'nextjs': 'Next.js', 'react': 'React', 'django': 'Django',
            'python': 'Python', 'typescript': 'TypeScript', 'javascript': 'JavaScript',
            'tailwind': 'Tailwind CSS'
        };
        return techNames[tech] || tech.toUpperCase();
    };

    return (
        <section id="технологии" className="py-20 bg-dark-900 relative overflow-hidden">
            {/* Фон */}
            <div className="absolute inset-0">
                <div className="absolute w-96 h-96 -top-48 -left-48 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-secondary-500/10 rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                >
                    Технологии которые мы{" "}
                    <span className="gradient-text">используем</span>
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto"
                >
                    Современный стек технологий для создания высококачественных продуктов
                </motion.p>

                <div className="glass-effect rounded-3xl p-8 mb-12">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
                        {technologies.map((stack, index) => (
                            <motion.div
                                key={stack}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.15, y: -5 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="relative"
                                onMouseEnter={() => setHoveredTech(stack)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <motion.div
                                    className="bg-dark-700/50 border border-white/10 rounded-2xl p-4 flex items-center justify-center hover:border-primary-500/50 transition-all duration-300"
                                    whileHover={{
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <img
                                        src={`https://skillicons.dev/icons?i=${stack}`}
                                        alt={stack}
                                        className="w-12 h-12"
                                    />
                                </motion.div>

                                {hoveredTech === stack && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-dark-800 border border-white/10 rounded-lg px-3 py-2 whitespace-nowrap"
                                    >
                                        <div className="text-sm font-medium text-white">
                                            {getTechName(stack)}
                                        </div>
                                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-dark-800 border-t border-l border-white/10 rotate-45" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    {[
                        { name: "Frontend", count: 5 },
                        { name: "Backend", count: 3 },
                        { name: "Tools", count: 2 }
                    ].map((category, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between bg-dark-800/50 border border-white/10 rounded-xl px-4 py-3 hover:border-primary-500/50 transition-all duration-300"
                        >
                            <span className="text-gray-300 font-medium">
                                {category.name}
                            </span>
                            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-bold px-2 py-1 rounded-lg min-w-8 text-center">
                                {category.count}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
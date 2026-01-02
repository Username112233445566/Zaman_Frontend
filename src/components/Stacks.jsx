"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState } from "react";
import { Zap, Cpu, Database, Cloud } from 'lucide-react';

export default function Stacks() {
    const { technologies } = siteData;
    const [hoveredTech, setHoveredTech] = useState(null);

    const techCategories = [
        {
            title: "Frontend",
            icon: Zap,
            techs: ["nextjs", "react", "typescript", "tailwind"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Backend",
            icon: Cpu,
            techs: ["nodejs", "python", "graphql"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Базы данных",
            icon: Database,
            techs: ["postgresql", "mongodb", "redis"],
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "DevOps",
            icon: Cloud,
            techs: ["docker", "aws", "nginx"],
            color: "from-orange-500 to-red-500"
        }
    ];

    const getTechName = (tech) => {
        const techNames = {
            'nextjs': 'Next.js', 'react': 'React', 'typescript': 'TypeScript',
            'tailwind': 'Tailwind CSS', 'nodejs': 'Node.js', 'python': 'Python',
            'graphql': 'GraphQL', 'postgresql': 'PostgreSQL', 'mongodb': 'MongoDB',
            'redis': 'Redis', 'docker': 'Docker', 'aws': 'AWS', 'nginx': 'Nginx'
        };
        return techNames[tech] || tech.toUpperCase();
    };

    return (
        <section id="технологии" className="py-20 bg-nexbit-dark relative overflow-hidden">
            {/* Фон */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-nexbit-primary/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-nexbit-secondary/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                >
                    Технологический <span className="gradient-text">стек</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto"
                >
                    Используем современные технологии для создания масштабируемых и производительных решений
                </motion.p>

                {/* Категории технологий */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {techCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="nexbit-card p-6 rounded-2xl"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center mb-4`}>
                                <category.icon className="w-6 h-6 text-white" />
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-4">
                                {category.title}
                            </h3>
                            
                            <div className="space-y-3">
                                {category.techs.map((tech, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-nexbit-primary to-nexbit-secondary" />
                                        <span className="text-gray-300">{getTechName(tech)}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Иконки технологий */}
                <div className="nexbit-card rounded-3xl p-8 mb-12">
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="relative"
                                onMouseEnter={() => setHoveredTech(tech)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                <motion.div
                                    className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center hover:border-nexbit-primary/50 transition-all duration-300"
                                    whileHover={{
                                        rotate: [0, -5, 5, 0],
                                        transition: { duration: 0.5 }
                                    }}
                                >
                                    <img
                                        src={`https://skillicons.dev/icons?i=${tech}`}
                                        alt={tech}
                                        className="w-10 h-10"
                                    />
                                </motion.div>

                                {hoveredTech === tech && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-nexbit-card border border-white/10 rounded-lg px-3 py-2 whitespace-nowrap z-20"
                                    >
                                        <div className="text-sm font-medium text-white">
                                            {getTechName(tech)}
                                        </div>
                                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-nexbit-card border-t border-l border-white/10 rotate-45" />
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Примечание */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Мы постоянно изучаем новые технологии и выбираем те, 
                        которые действительно подходят для решения конкретных бизнес-задач
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
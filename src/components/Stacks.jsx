"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState } from "react";
import "../styles/Stacks.css";

export default function Stacks() {
    const { technologies } = siteData;
    const [hoveredTech, setHoveredTech] = useState(null);

    // Простая функция для получения читаемого имени технологии
    const getTechName = (tech) => {
        const techNames = {
            'react': 'React',
            'nextjs': 'Next.js',
            'vue': 'Vue.js',
            'angular': 'Angular',
            'typescript': 'TypeScript',
            'javascript': 'JavaScript',
            'html': 'HTML',
            'css': 'CSS',
            'sass': 'Sass',
            'tailwind': 'Tailwind CSS',
            'nodejs': 'Node.js',
            'express': 'Express',
            'nestjs': 'NestJS',
            'python': 'Python',
            'django': 'Django',
            'fastapi': 'FastAPI',
            'java': 'Java',
            'spring': 'Spring',
            'php': 'PHP',
            'laravel': 'Laravel',
            'android': 'Android',
            'kotlin': 'Kotlin',
            'flutter': 'Flutter',
            'swift': 'Swift',
            'mongodb': 'MongoDB',
            'mysql': 'MySQL',
            'postgresql': 'PostgreSQL',
            'redis': 'Redis',
            'sqlite': 'SQLite',
            'git': 'Git',
            'docker': 'Docker',
            'aws': 'AWS',
            'nginx': 'Nginx',
            'jenkins': 'Jenkins',
            'figma': 'Figma'
        };

        return techNames[tech] || tech.toUpperCase();
    };

    return (
        <section id="технологии" className="stacks">
            <div className="stacks-background">
                <div className="tech-grid-bg"></div>
            </div>

            <div className="stacks-content">
                <motion.h3
                    className="stacks-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Технологии которые мы{" "}
                    <span className="stacks-title-accent">используем</span>
                </motion.h3>

                <motion.p
                    className="stacks-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Современный стек технологий для создания высококачественных продуктов
                </motion.p>

                <div className="stacks-container">
                    {technologies.map((stack, index) => (
                        <motion.div
                            key={stack}
                            className="tech-item"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{
                                scale: 1.15,
                                y: -5
                            }}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.05
                            }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredTech(stack)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            <motion.img
                                src={`https://skillicons.dev/icons?i=${stack}`}
                                alt={stack}
                                className="tech-icon"
                                whileHover={{
                                    rotate: [0, -5, 5, 0],
                                    transition: { duration: 0.5 }
                                }}
                            />

                            {/* Тултип показывается только при наведении */}
                            {hoveredTech === stack && (
                                <motion.div
                                    className="tech-tooltip"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                >
                                    {getTechName(stack)}
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Простые категории без сложной логики */}
                <motion.div
                    className="tech-categories"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="tech-category">
                        <span className="category-name">Frontend</span>
                        <span className="category-count">
                            {technologies.filter(tech =>
                                ['react', 'nextjs', 'vue', 'angular', 'typescript', 'javascript', 'html', 'css', 'sass', 'tailwind'].includes(tech)
                            ).length}
                        </span>
                    </div>
                    <div className="tech-category">
                        <span className="category-name">Backend</span>
                        <span className="category-count">
                            {technologies.filter(tech =>
                                ['nodejs', 'express', 'nestjs', 'python', 'django', 'fastapi', 'java', 'spring', 'php', 'laravel'].includes(tech)
                            ).length}
                        </span>
                    </div>
                    <div className="tech-category">
                        <span className="category-name">Tools</span>
                        <span className="category-count">
                            {technologies.filter(tech =>
                                ['git', 'docker', 'aws', 'nginx', 'jenkins', 'figma'].includes(tech)
                            ).length}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
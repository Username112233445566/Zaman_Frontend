"use client";
import { motion } from "framer-motion";
import { Trophy, Users, Zap, Clock } from 'lucide-react';
import { siteData } from "@/data/siteData";
import { useState, useEffect } from "react";

const iconComponents = { Trophy, Users, Zap };

export default function Trust() {
    const { achievements } = siteData;
    const [counters, setCounters] = useState({
        projects: 0,
        clients: 0,
        years: 0
    });

    useEffect(() => {
        const duration = 2000; // 2 секунды
        const steps = 60;
        const increment = {
            projects: 50 / steps,
            clients: 98 / steps,
            years: 2 / steps
        };

        let current = { projects: 0, clients: 0, years: 0 };
        const interval = setInterval(() => {
            current.projects += increment.projects;
            current.clients += increment.clients;
            current.years += increment.years;

            setCounters({
                projects: Math.min(50, Math.floor(current.projects)),
                clients: Math.min(98, Math.floor(current.clients)),
                years: Math.min(2, Math.floor(current.years))
            });

            if (current.projects >= 50 && current.clients >= 98 && current.years >= 2) {
                clearInterval(interval);
            }
        }, duration / steps);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="достижения" className="py-20 bg-nexbit-card">
            <div className="container mx-auto px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Почему нам <span className="gradient-text">доверяют</span>
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        { 
                            num: `${counters.projects}+`, 
                            text: "Реализованных проектов", 
                            icon: Trophy,
                            description: "От MVP до сложных IT-систем"
                        },
                        { 
                            num: `${counters.clients}%`, 
                            text: "Довольных клиентов", 
                            icon: Users,
                            description: "Возвращаются с новыми проектами"
                        },
                        { 
                            num: `${counters.years}+`, 
                            text: "Года опыта", 
                            icon: Zap,
                            description: "Работаем с 2023 года"
                        }
                    ].map((stat, i) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="nexbit-card p-8 text-center relative overflow-hidden group"
                            >
                                {/* Фон при наведении */}
                                <div className="absolute inset-0 bg-gradient-to-br from-nexbit-primary/5 to-nexbit-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="relative z-10">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-nexbit-primary/20 to-nexbit-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-10 h-10 text-nexbit-primary" />
                                        </div>
                                    </div>
                                    <p className="text-5xl font-bold bg-gradient-to-r from-nexbit-primary to-nexbit-secondary bg-clip-text text-transparent mb-2">
                                        {stat.num}
                                    </p>
                                    <p className="text-gray-400 text-lg mb-2">
                                        {stat.text}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-gradient-to-r from-nexbit-primary/10 to-nexbit-secondary/10 border-l-4 border-nexbit-primary rounded-2xl p-6"
                >
                    <div className="flex items-start gap-4">
                        <Clock className="w-6 h-6 text-nexbit-primary mt-1 flex-shrink-0" />
                        <div>
                            <p className="text-gray-300 text-lg mb-2">
                                Мы ценим время наших клиентов
                            </p>
                            <p className="text-gray-400">
                                Поэтому всегда соблюдаем сроки, предоставляем регулярные отчеты и быстро реагируем на запросы.
                                Среднее время ответа — 15 минут в рабочее время.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
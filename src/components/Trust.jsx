// ФАЙЛ: src/components/Trust.jsx
"use client";
import { motion } from "framer-motion";
import { Trophy, Zap, Users } from 'lucide-react';
import { siteData } from "@/data/siteData";

const iconComponents = { Trophy, Zap, Users };

export default function Trust() {
    const { achievements } = siteData;

    return (
        <section id="достижения" className="py-20 bg-dark-800">
            <div className="container mx-auto px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-16"
                >
                    Почему нам{" "}
                    <span className="gradient-text">доверяют</span>
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {achievements.map((stat, i) => {
                        const IconComponent = iconComponents[stat.icon];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="bg-dark-700/50 border border-white/10 rounded-2xl p-8 text-center"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center">
                                        <IconComponent className="w-8 h-8 text-primary-500" />
                                    </div>
                                </div>
                                <p className="text-5xl font-bold text-primary-500 mb-2">
                                    {stat.num}
                                </p>
                                <p className="text-gray-400 text-lg">
                                    {stat.text}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-l-4 border-primary-500 rounded-xl p-6"
                >
                    <div className="flex items-start gap-4">
                        <Users className="w-6 h-6 text-primary-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-300 text-lg">
                            Мы — команда опытных разработчиков и дизайнеров. Наша цель — не просто выполнить задание, а создать{" "}
                            <strong className="text-white">ценный продукт</strong>, который принесёт вам реальную пользу.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
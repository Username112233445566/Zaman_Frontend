// ФАЙЛ: src/components/Hero.jsx
"use client";
import { motion } from "framer-motion";
import { Zap, ArrowRight, X, Clock, CheckCircle, Star, Users, Trophy, Code, Smartphone, Globe, MessageCircle } from 'lucide-react';
import { siteData } from "@/data/siteData";
import { useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Hero() {
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const handleSubmitOrder = () => {
        setShowOrderModal(false);
        setTimeout(() => {
            const contactsSection = document.getElementById('контакты');
            if (contactsSection) contactsSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-dark-900">
            {/* Частицы фон */}
            <div className="absolute inset-0 z-0">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        background: { color: { value: "transparent" } },
                        fpsLimit: 120,
                        interactivity: {
                            events: { onHover: { enable: true, mode: "repulse" } },
                            modes: { repulse: { distance: 100, duration: 0.4 } },
                        },
                        particles: {
                            color: { value: ["#4f46e5", "#10b981", "#6366f1"] },
                            links: {
                                color: "#4f46e5",
                                distance: 150,
                                enable: true,
                                opacity: 0.3,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: { default: "bounce" },
                                random: true,
                                speed: 1,
                                straight: false,
                            },
                            number: { density: { enable: true, area: 800 }, value: 40 },
                            opacity: { value: 0.5 },
                            shape: { type: "circle" },
                            size: { value: { min: 1, max: 3 } },
                        },
                        detectRetina: true,
                    }}
                />
                
                {/* Градиенты */}
                <div className="absolute w-96 h-96 -top-24 -right-24 bg-gradient-to-br from-primary-500/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute w-96 h-96 -bottom-24 -left-24 bg-gradient-to-tr from-secondary-500/30 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Левая часть - контент */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 text-primary-400 px-4 py-2 rounded-full text-sm font-semibold mb-8"
                        >
                            <Zap className="w-4 h-4" />
                            Создаем цифровые продукты
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            Превращаем{" "}
                            <span className="gradient-text">
                                ваши идеи
                            </span>{" "}
                            в реальность
                        </h1>

                        <p className="text-gray-400 text-lg mb-8 max-w-xl">
                            Полный цикл разработки: от концепции и дизайна до запуска и поддержки.
                            Создаем современные веб-приложения, мобильные приложения и сложные IT-системы.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <motion.button
                                onClick={() => setShowOrderModal(true)}
                                className="btn-gradient px-8 py-4 rounded-xl flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Начать проект
                                <ArrowRight className="w-5 h-5" />
                            </motion.button>
                            <motion.button
                                onClick={() => setShowInfoModal(true)}
                                className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Смотреть работы
                            </motion.button>
                        </div>

                        {/* Статистика */}
                        <div className="grid grid-cols-3 gap-8">
                            {[
                                { number: "50+", label: "Завершенных проектов" },
                                { number: "98%", label: "Довольных клиентов" },
                                { number: "24/7", label: "Поддержка" },
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-2xl font-bold text-primary-500 mb-1">
                                        {stat.number}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Правая часть - карточка основателя */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="glass-effect rounded-3xl p-8 max-w-md mx-auto"
                    >
                        <div className="text-center mb-6">
                            <div className="relative inline-block mb-4">
                                <img
                                    src="/image.png"
                                    alt="Касенов Умар"
                                    className="w-32 h-32 rounded-full border-4 border-primary-500/30 object-cover"
                                />
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                    <div className="flex items-center gap-1 bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                        <Zap className="w-3 h-3" />
                                        Основатель
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-1">
                                Касенов Умар
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Full-stack разработчик & Предприниматель
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-6 border-y border-white/10 mb-6">
                            {[
                                { value: "2+", label: "лет в IT" },
                                { value: "50+", label: "проектов" },
                                { value: "30+", label: "клиентов" },
                            ].map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <div className="text-lg font-bold text-primary-500">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                            Начал с фриланса в 2023 году, прошел путь от простых сайтов до сложных IT-систем.
                            Основал ZAMAN Studio чтобы помогать бизнесу реализовывать цифровые идеи.
                        </p>

                        <div className="bg-secondary-500/10 border border-secondary-500/30 rounded-xl p-4 mb-6 relative">
                            <div className="absolute -top-3 left-6 bg-dark-900 text-secondary-500 text-2xl font-bold px-2">
                                "
                            </div>
                            <p className="text-gray-200 text-sm italic text-center">
                                Верю, что технологии должны решать реальные проблемы бизнеса
                            </p>
                        </div>

                        <motion.a
                            href="https://t.me/casen0v_1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-primary-500/10 border border-primary-500/30 text-primary-400 hover:bg-primary-500/20 hover:text-primary-300 px-4 py-3 rounded-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MessageCircle className="w-4 h-4" />
                            Написать в Telegram
                        </motion.a>
                    </motion.div>
                </div>

                {/* Индикатор прокрутки */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary-500 to-transparent" />
                </motion.div>
            </div>

            {/* Модалки остаются без изменений стилей - только Tailwind классы */}
            {showOrderModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setShowOrderModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-dark-800 rounded-2xl p-6 max-w-md w-full border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Содержимое модалки - обновится в следующем шаге */}
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
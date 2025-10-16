"use client";
import { motion } from "framer-motion";
import { Zap, ArrowRight, X, Clock, CheckCircle, Star, Users, Trophy, Code, Smartphone, Globe, Palette, Headphones } from 'lucide-react';
import { siteData } from "@/data/siteData";
import { useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "../styles/Hero.css";

export default function Hero() {
    const { colors } = siteData;
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showInfoModal, setShowInfoModal] = useState(false);

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const handleOrderProject = () => {
        setShowOrderModal(true);
    };

    const handleLearnMore = () => {
        setShowInfoModal(true);
    };

    const handleSubmitOrder = () => {
        setShowOrderModal(false);
        setTimeout(() => {
            const contactsSection = document.getElementById('контакты');
            if (contactsSection) {
                contactsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }, 300);
    };

    const handleViewPortfolio = () => {
        setShowInfoModal(false);
        // Здесь можно добавить переход на страницу портфолио
        // или прокрутку к секции с работами
        alert("Скоро здесь будет наше портфолио!");
    };

    return (
        <section className="hero">
            {/* Анимированный фон с частицами */}
            <div className="hero-background">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                repulse: {
                                    distance: 100,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: ["#4f46e5", "#10b981", "#6366f1"],
                            },
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
                                outModes: {
                                    default: "bounce",
                                },
                                random: true,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 40,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 3 },
                            },
                        },
                        detectRetina: true,
                    }}
                />

                {/* Градиентные overlays */}
                <div className="gradient-overlay gradient-1"></div>
                <div className="gradient-overlay gradient-2"></div>
                <div className="gradient-overlay gradient-3"></div>
            </div>

            <div className="hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-content"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hero-badge"
                    >
                        <Zap size={16} />
                        Создаем цифровые продукты
                    </motion.div>

                    <h1 className="hero-title">
                        Превращаем
                        <motion.span
                            className="gradient-text"
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            ваши идеи
                        </motion.span>
                        {" "}в реальность
                    </h1>

                    <p className="hero-description">
                        Полный цикл разработки: от концепции и дизайна до запуска и поддержки.
                        Создаем современные веб-приложения, мобильные приложения и сложные IT-системы.
                    </p>

                    <div className="hero-buttons">
                        <motion.button
                            className="hero-btn primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleOrderProject}
                        >
                            Начать проект
                            <ArrowRight size={18} />
                        </motion.button>

                        <motion.button
                            className="hero-btn secondary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleLearnMore}
                        >
                            Смотреть работы
                        </motion.button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Завершенных проектов</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Довольных клиентов</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Поддержка</div>
                        </div>
                    </div>
                </motion.div>

                {/* Правая часть с анимированными элементами */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-visual"
                >
                    <div className="floating-cards">
                        {/* Карточка с веб-разработкой */}
                        <motion.div
                            className="card card-1"
                            animate={{
                                y: [-15, 5, -15],
                                rotate: [-3, 1, -3]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="card-icon">
                                <Globe size={24} />
                            </div>
                            <div className="card-content">
                                <h4>Веб-разработка</h4>
                                <p>Современные сайты и веб-приложения</p>
                            </div>
                        </motion.div>

                        {/* Карточка с мобильными приложениями */}
                        <motion.div
                            className="card card-2"
                            animate={{
                                y: [10, -5, 10],
                                rotate: [2, -1, 2]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                            <div className="card-icon">
                                <Smartphone size={24} />
                            </div>
                            <div className="card-content">
                                <h4>Мобильные приложения</h4>
                                <p>iOS и Android разработка</p>
                            </div>
                        </motion.div>

                        {/* Карточка с дизайном */}
                        <motion.div
                            className="card card-3"
                            animate={{
                                y: [-5, 12, -5],
                                rotate: [1, -2, 1]
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        >
                            <div className="card-icon">
                                <Palette size={24} />
                            </div>
                            <div className="card-content">
                                <h4>UI/UX Дизайн</h4>
                                <p>Интуитивные интерфейсы</p>
                            </div>
                        </motion.div>

                        {/* Карточка с поддержкой */}
                        <motion.div
                            className="card card-4"
                            animate={{
                                y: [8, -8, 8],
                                rotate: [-2, 2, -2]
                            }}
                            transition={{
                                duration: 6.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1.5
                            }}
                        >
                            <div className="card-icon">
                                <Headphones size={24} />
                            </div>
                            <div className="card-content">
                                <h4>Поддержка</h4>
                                <p>Техническая поддержка 24/7</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="scroll-line"></div>
            </motion.div>

            {/* Модальное окно "Начать проект" */}
            {showOrderModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="modal-overlay"
                    onClick={() => setShowOrderModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setShowOrderModal(false)}
                        >
                            <X size={20} />
                        </button>

                        <div className="modal-header">
                            <Zap className="modal-icon" size={32} />
                            <h3>Начнем ваш проект</h3>
                        </div>

                        <div className="modal-body">
                            <div className="process-steps">
                                <div className="process-step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h4>Бесплатная консультация</h4>
                                        <p>Обсудим ваши цели и предложим оптимальное решение</p>
                                    </div>
                                </div>

                                <div className="process-step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h4>Составление ТЗ</h4>
                                        <p>Детально проработаем техническое задание и сроки</p>
                                    </div>
                                </div>

                                <div className="process-step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h4>Разработка и запуск</h4>
                                        <p>Создадим продукт и запустим его в работу</p>
                                    </div>
                                </div>
                            </div>

                            <div className="technologies">
                                <h4>Наши технологии:</h4>
                                <div className="tech-icons">
                                    <div className="tech-item">
                                        <Code size={20} />
                                        <span>Web Development</span>
                                    </div>
                                    <div className="tech-item">
                                        <Smartphone size={20} />
                                        <span>Mobile Apps</span>
                                    </div>
                                    <div className="tech-item">
                                        <Globe size={20} />
                                        <span>Cloud Solutions</span>
                                    </div>
                                </div>
                            </div>

                            <div className="notice">
                                <Clock className="notice-icon" size={20} />
                                <p>
                                    <strong>Свяжемся с вами в течение 2 часов</strong> после отправки заявки
                                </p>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                className="modal-btn primary"
                                onClick={handleSubmitOrder}
                            >
                                <CheckCircle size={18} />
                                Перейти к заявке
                            </button>
                            <button
                                className="modal-btn secondary"
                                onClick={() => setShowOrderModal(false)}
                            >
                                Вернуться
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            {/* Модальное окно "Смотреть работы" */}
            {showInfoModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="modal-overlay"
                    onClick={() => setShowInfoModal(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setShowInfoModal(false)}
                        >
                            <X size={20} />
                        </button>

                        <div className="modal-header">
                            <Trophy className="modal-icon" size={32} />
                            <h3>Наши работы</h3>
                        </div>

                        <div className="modal-body">
                            <div className="portfolio-stats">
                                <div className="portfolio-stat">
                                    <Star className="stat-icon" size={24} />
                                    <div>
                                        <div className="stat-number">50+</div>
                                        <div className="stat-label">Проектов</div>
                                    </div>
                                </div>
                                <div className="portfolio-stat">
                                    <Users className="stat-icon" size={24} />
                                    <div>
                                        <div className="stat-number">30+</div>
                                        <div className="stat-label">Клиентов</div>
                                    </div>
                                </div>
                                <div className="portfolio-stat">
                                    <Zap className="stat-icon" size={24} />
                                    <div>
                                        <div className="stat-number">3+</div>
                                        <div className="stat-label">Года опыта</div>
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-categories">
                                <h4>Направления:</h4>
                                <div className="categories-grid">
                                    <div className="category">
                                        <Code size={20} />
                                        <span>Веб-приложения</span>
                                    </div>
                                    <div className="category">
                                        <Smartphone size={20} />
                                        <span>Мобильные приложения</span>
                                    </div>
                                    <div className="category">
                                        <Globe size={20} />
                                        <span>Интернет-магазины</span>
                                    </div>
                                    <div className="category">
                                        <Zap size={20} />
                                        <span>Telegram боты</span>
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-notice">
                                <p>Хотите увидеть конкретные примеры наших работ?</p>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                className="modal-btn primary"
                                onClick={handleViewPortfolio}
                            >
                                Посмотреть портфолио
                            </button>
                            <button
                                className="modal-btn secondary"
                                onClick={() => setShowInfoModal(false)}
                            >
                                Закрыть
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
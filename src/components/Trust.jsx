"use client";
import { motion } from "framer-motion";
import { Trophy, Zap, Users } from 'lucide-react';
import { siteData } from "@/data/siteData";
import "../styles/Trust.css";

const iconComponents = {
    Trophy,
    Zap,
    Users
};

export default function Trust() {
    const { achievements, colors } = siteData;

    return (
        <section id="достижения" className="trust">
            <div className="trust-container">
                <h3 className="trust-title">
                    Почему нам <span className="trust-title-accent">доверяют</span>
                </h3>

                <div className="achievements-grid">
                    {achievements.map((stat, i) => {
                        const IconComponent = iconComponents[stat.icon];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                viewport={{ once: true }}
                                className="achievement-card"
                            >
                                <div className="achievement-icon">
                                    <IconComponent size={36} />
                                </div>
                                <p className="achievement-number">{stat.num}</p>
                                <p className="achievement-text">{stat.text}</p>
                            </motion.div>
                        );
                    })}
                </div>

                <p className="trust-description">
                    <Users size={20} className="trust-description-icon" />
                    Мы — команда опытных разработчиков и дизайнеров. Наша цель — не просто выполнить задание, а создать <strong>ценный продукт</strong>, который принесёт вам реальную пользу.
                </p>
            </div>
        </section>
    );
}
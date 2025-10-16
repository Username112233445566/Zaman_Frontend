"use client";
import { motion } from "framer-motion";
import { Code, Send, Zap } from 'lucide-react';
import { siteData } from "@/data/siteData";
import "../styles/Services.css";

const iconComponents = {
    Code,
    Send,
    Zap
};

export default function Services() {
    const { services, colors } = siteData;

    const handleOrderService = (serviceName, serviceDesc) => {
        // Сохраняем данные о выбранной услуге в sessionStorage
        sessionStorage.setItem('selectedService', JSON.stringify({
            name: serviceName,
            description: serviceDesc
        }));

        // Прокручиваем к форме контактов
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

    return (
        <section id="услуги" className="services">
            <h3 className="services-title">
                Наши ключевые <span className="services-title-accent">Услуги</span>
            </h3>

            <div className="services-grid">
                {services.map((item, i) => {
                    const IconComponent = iconComponents[item.icon];
                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="service-card"
                        >
                            <div className="service-icon">
                                <IconComponent size={24} />
                            </div>
                            <h4 className="service-name">
                                {item.title}
                            </h4>
                            <p className="service-description">{item.desc}</p>
                            <motion.button
                                className="service-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleOrderService(item.title, item.desc)}
                            >
                                Заказать
                            </motion.button>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
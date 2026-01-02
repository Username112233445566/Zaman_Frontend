// ФАЙЛ: src/components/Services.jsx
"use client";
import { motion } from "framer-motion";
import {
    Code, Send, Zap, Globe, LayoutDashboard,
    Server, LifeBuoy, BrainCircuit
} from "lucide-react";
import { siteData } from "@/data/siteData";

const iconComponents = {
    Code, Send, Zap, Globe, LayoutDashboard, Server, LifeBuoy, BrainCircuit
};

export default function Services() {
    const { services } = siteData;

    const handleOrderService = (serviceName, serviceDesc) => {
        sessionStorage.setItem(
            "selectedService",
            JSON.stringify({ name: serviceName, description: serviceDesc })
        );

        setTimeout(() => {
            const contactsSection = document.getElementById("контакты");
            if (contactsSection) contactsSection.scrollIntoView({ behavior: "smooth" });
        }, 300);
    };

    return (
        <section id="услуги" className="py-20 bg-dark-900">
            <div className="container mx-auto px-4">
                <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12"
                >
                    Наши ключевые{" "}
                    <span className="gradient-text">Услуги</span>
                </motion.h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((item, i) => {
                        const IconComponent = iconComponents[item.icon] || Code;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className="group bg-dark-800 border border-white/10 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-xl mb-4 group-hover:bg-primary-500/20 transition-colors">
                                    <IconComponent className="w-6 h-6 text-primary-500" />
                                </div>
                                
                                <h4 className="text-xl font-bold text-white mb-3">
                                    {item.title}
                                </h4>
                                
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                    {item.desc}
                                </p>
                                
                                <motion.button
                                    onClick={() => handleOrderService(item.title, item.desc)}
                                    className="w-full py-3 rounded-xl border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Заказать
                                </motion.button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
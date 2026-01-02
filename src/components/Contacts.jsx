// ФАЙЛ: src/components/Contacts.jsx
"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState, useEffect } from "react";

export default function Contacts() {
    const { contactInfo } = siteData;
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const selectedService = sessionStorage.getItem('selectedService');
        if (selectedService) {
            const service = JSON.parse(selectedService);
            setFormData(prev => ({
                ...prev,
                message: `Здравствуйте! Я хочу заказать услугу: "${service.name}"\n\n${service.description}\n\nПожалуйста, свяжитесь со мной для обсуждения деталей.`
            }));
            sessionStorage.removeItem('selectedService');
        }
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Имя обязательно';
        if (!formData.phone.trim()) newErrors.phone = 'Телефон обязателен';
        if (!formData.message.trim()) newErrors.message = 'Сообщение обязательно';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const sendToTelegram = async (data) => {
        try {
            const response = await fetch('/api/sendToTelegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            return result.success || false;
        } catch (err) {
            console.error('Ошибка отправки:', err);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        const telegramSuccess = await sendToTelegram(formData);

        if (telegramSuccess) {
            showNotification('Сообщение отправлено! Мы свяжемся с вами.', 'success');
            setFormData({ name: '', phone: '', message: '' });
            setErrors({});
        } else {
            showNotification('Ошибка при отправке. Попробуйте ещё раз.', 'error');
        }
        setIsSubmitting(false);
    };

    const showNotification = (message, type = 'success') => {
        // Реализация уведомления
        const existing = document.querySelector('.custom-notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `custom-notification fixed top-4 right-4 z-50 ${
            type === 'success' 
            ? 'bg-green-500/10 border-green-500/30' 
            : 'bg-red-500/10 border-red-500/30'
        } border rounded-xl p-4 backdrop-blur-sm`;
        notification.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="text-lg">${type === 'success' ? '✅' : '❌'}</div>
                <div class="text-white">${message}</div>
                <button class="ml-4 text-gray-400 hover:text-white">×</button>
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 5000);
    };

    return (
        <section id="контакты" className="py-20 bg-dark-900 border-t border-white/10">
            <div className="container mx-auto px-4">
                <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Свяжитесь с <span className="gradient-text">нами</span>
                </h3>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Контактная информация */}
                    <div className="space-y-6">
                        {contactInfo.map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="block bg-dark-800 border border-white/10 rounded-2xl p-6 hover:border-primary-500/50 transition-all duration-300 group"
                            >
                                <p className="text-gray-400 text-sm mb-2">
                                    {item.label}
                                </p>
                                <p className="text-xl font-bold text-primary-500 group-hover:text-primary-400 transition-colors">
                                    {item.value}
                                </p>
                            </motion.a>
                        ))}
                    </div>

                    {/* Форма */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="bg-dark-800 border border-white/10 rounded-2xl p-8"
                    >
                        <h4 className="text-xl font-bold text-white mb-6">
                            Напишите нам
                        </h4>

                        <div className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Ваше имя"
                                    className={`input-style w-full ${
                                        errors.name ? 'border-red-500 focus:ring-red-500' : ''
                                    }`}
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && (
                                    <p className="mt-2 text-sm text-red-400">
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Ваш телефон"
                                    className={`input-style w-full ${
                                        errors.phone ? 'border-red-500 focus:ring-red-500' : ''
                                    }`}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                {errors.phone && (
                                    <p className="mt-2 text-sm text-red-400">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Ваше сообщение"
                                    rows="5"
                                    className={`input-style w-full resize-none ${
                                        errors.message ? 'border-red-500 focus:ring-red-500' : ''
                                    }`}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                {errors.message && (
                                    <p className="mt-2 text-sm text-red-400">
                                        {errors.message}
                                    </p>
                                )}
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-gradient py-4 rounded-xl font-semibold text-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Отправка...
                                    </span>
                                ) : (
                                    'Отправить сообщение'
                                )}
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
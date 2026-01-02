"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState, useEffect } from "react";
import { Mail, Phone, Send, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

export default function Contacts() {
    const { contactInfo } = siteData;
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        const selectedService = sessionStorage.getItem('selectedService');
        const selectedProject = sessionStorage.getItem('selectedProject');
        
        if (selectedService) {
            const service = JSON.parse(selectedService);
            setFormData(prev => ({
                ...prev,
                service: service.name,
                message: `Здравствуйте! Меня интересует услуга: "${service.name}"\n\n${service.description}`
            }));
            sessionStorage.removeItem('selectedService');
        }
        
        if (selectedProject) {
            const project = JSON.parse(selectedProject);
            setFormData(prev => ({
                ...prev,
                service: `Проект: ${project.title}`,
                message: `Здравствуйте! Интересуюсь проектом: "${project.title}"\n\n${project.description}`
            }));
            sessionStorage.removeItem('selectedProject');
        }
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Введите ваше имя';
        if (!formData.phone.trim()) newErrors.phone = 'Введите ваш телефон';
        if (!formData.message.trim()) newErrors.message = 'Опишите ваш проект';
        
        // Валидация телефона (простая)
        if (formData.phone.trim() && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
            newErrors.phone = 'Введите корректный номер телефона';
        }
        
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
            showNotification('Сообщение отправлено! Мы свяжемся с вами в течение 1 часа.', 'success');
            setFormData({ name: '', phone: '', email: '', service: '', message: '' });
            setErrors({});
        } else {
            showNotification('Ошибка при отправке. Попробуйте ещё раз или свяжитесь другим способом.', 'error');
        }
        setIsSubmitting(false);
    };

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 5000);
    };

    const serviceOptions = [
        'Веб-приложение',
        'Мобильное приложение', 
        'E-commerce',
        'Telegram бот',
        'UI/UX Дизайн',
        'Технический аудит',
        'Другое'
    ];

    return (
        <section id="контакты" className="py-20 bg-nexbit-dark relative">
            {/* Фоновые элементы */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-nexbit-primary/10 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-nexbit-secondary/10 to-transparent rounded-full blur-3xl" />
            </div>

            {/* Уведомление */}
            {notification && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`fixed top-6 right-6 z-50 rounded-xl p-4 backdrop-blur-sm border ${
                        notification.type === 'success' 
                        ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                        : 'bg-red-500/10 border-red-500/30 text-red-400'
                    }`}
                >
                    <div className="flex items-center gap-3">
                        {notification.type === 'success' ? 
                            <CheckCircle className="w-5 h-5" /> : 
                            <XCircle className="w-5 h-5" />
                        }
                        <div>{notification.message}</div>
                        <button 
                            onClick={() => setNotification(null)}
                            className="ml-4 hover:opacity-70"
                        >
                            ✕
                        </button>
                    </div>
                </motion.div>
            )}

            <div className="container relative z-10 mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                >
                    Свяжитесь с <span className="gradient-text">нами</span>
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto"
                >
                    Обсудим ваш проект, ответим на вопросы и подготовим индивидуальное предложение
                </motion.p>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Контактная информация */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">
                                Контакты
                            </h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                                        whileHover={{ x: 5 }}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-nexbit-primary/10 flex items-center justify-center group-hover:bg-nexbit-primary/20 transition-colors">
                                            {i === 0 ? <MessageSquare className="w-6 h-6 text-nexbit-primary" /> :
                                             i === 1 ? <Phone className="w-6 h-6 text-nexbit-primary" /> :
                                             <Mail className="w-6 h-6 text-nexbit-primary" />}
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm mb-1">
                                                {item.label}
                                            </p>
                                            <p className="text-white font-medium">
                                                {item.value}
                                            </p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Время работы */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="nexbit-card p-6 rounded-2xl"
                        >
                            <h4 className="text-lg font-bold text-white mb-4">
                                Время работы
                            </h4>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Пн-Пт</span>
                                    <span className="text-white">9:00 - 18:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Сб-Вс</span>
                                    <span className="text-white">По договоренности</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10">
                                <p className="text-gray-400 text-sm">
                                    Обычно отвечаем в течение 15 минут в рабочее время
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Форма */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="nexbit-card p-8 rounded-3xl">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nexbit-primary to-nexbit-secondary flex items-center justify-center">
                                    <Send className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">
                                        Оставьте заявку
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Мы свяжемся с вами для уточнения деталей
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-2">
                                            Ваше имя *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Иван Иванов"
                                            className={`input-style w-full ${
                                                errors.name ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500/30' : ''
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
                                        <label className="block text-sm text-gray-400 mb-2">
                                            Телефон *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="+996 (XXX) XXX-XXX"
                                            className={`input-style w-full ${
                                                errors.phone ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500/30' : ''
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
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="ivan@example.com"
                                        className="input-style w-full"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Услуга / проект
                                    </label>
                                    <select
                                        name="service"
                                        className="input-style w-full"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Выберите услугу или введите свой вариант</option>
                                        {serviceOptions.map((option, idx) => (
                                            <option key={idx} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-400 mb-2">
                                        Опишите ваш проект *
                                    </label>
                                    <textarea
                                        name="message"
                                        placeholder="Опишите кратко ваш проект, задачи, цели..."
                                        rows="5"
                                        className={`textarea-style w-full ${
                                            errors.message ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500/30' : ''
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
                                    className="btn-gradient w-full py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Отправка...
                                        </>
                                    ) : (
                                        <>
                                            Отправить заявку
                                            <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-gray-500 text-xs text-center">
                                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                                </p>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
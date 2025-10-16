"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { useState, useEffect } from "react";
import "../styles/Contacts.css";

export default function Contacts() {
    const { contactInfo, colors } = siteData;
    const [formData, setFormData] = useState({
        name: '',
        phone: '', // Заменили email на phone
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Эффект для автоматического заполнения сообщения при переходе из сервисов
    useEffect(() => {
        const selectedService = sessionStorage.getItem('selectedService');
        if (selectedService) {
            const service = JSON.parse(selectedService);
            setFormData(prev => ({
                ...prev,
                message: `Здравствуйте! Я хочу заказать услугу: "${service.name}"\n\n${service.description}\n\nПожалуйста, свяжитесь со мной для обсуждения деталей.`
            }));
            // Очищаем storage после использования
            sessionStorage.removeItem('selectedService');
        }
    }, []);

    const validateForm = () => {
        const newErrors = {};

        // Валидация имени
        if (!formData.name.trim()) {
            newErrors.name = 'Имя обязательно для заполнения';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Имя должно содержать минимум 2 символа';
        }

        // Валидация телефона (заменили email на phone)
        if (!formData.phone.trim()) {
            newErrors.phone = 'Телефон обязателен для заполнения';
        } else if (!/^[\+]?[7-8]?[0-9\s\-\(\)]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
            newErrors.phone = 'Введите корректный номер телефона';
        }

        // Валидация сообщения
        if (!formData.message.trim()) {
            newErrors.message = 'Сообщение обязательно для заполнения';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Сообщение должно содержать минимум 10 символов';
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Форматирование номера телефона
        let formattedValue = value;
        if (name === 'phone') {
            formattedValue = formatPhoneNumber(value);
        }

        setFormData(prev => ({
            ...prev,
            [name]: formattedValue
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Функция для форматирования номера телефона
    const formatPhoneNumber = (value) => {
        // Удаляем все нецифровые символы
        const numbers = value.replace(/\D/g, '');

        if (numbers.length === 0) return '';

        let formatted = '';

        if (numbers.length <= 1) {
            formatted = numbers;
        } else if (numbers.length <= 4) {
            formatted = `${numbers}`;
        } else if (numbers.length <= 7) {
            formatted = `${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4)}`;
        } else if (numbers.length <= 9) {
            formatted = `${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4, 7)} ${numbers.slice(7)}`;
        } else {
            formatted = `${numbers.slice(0, 1)} ${numbers.slice(1, 4)} ${numbers.slice(4, 7)} ${numbers.slice(7, 9)} ${numbers.slice(9, 11)}`;
        }

        return formatted;
    };

    const sendToTelegram = async (data) => {
        const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
        const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

        if (!TELEGRAM_BOT_TOKEN || !CHAT_ID) {
            console.error('Telegram bot token или chat ID не настроены');
            return false;
        }

        const text = `🎯 <b>НОВАЯ ЗАЯВКА С САЙТА</b>\n\n` +
            `👤 <b>Имя:</b> ${data.name}\n` +
            `📞 <b>Телефон:</b> ${data.phone}\n` + // Изменили с Email на Телефон
            `💬 <b>Сообщение:</b>\n${data.message}\n\n` +
            `⏰ <b>Время:</b> ${new Date().toLocaleString('ru-RU')}\n` +
            `🌐 <b>Источник:</b> форма контактов`;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'HTML'
                })
            });

            const result = await response.json();

            if (!response.ok) {
                console.error('Ошибка Telegram API:', result);
                throw new Error(result.description || 'Ошибка отправки в Telegram');
            }

            return true;
        } catch (error) {
            console.error('Ошибка отправки в Telegram:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            const telegramSuccess = await sendToTelegram(formData);

            if (telegramSuccess) {
                showNotification('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.', 'success');

                setFormData({
                    name: '',
                    phone: '',
                    message: ''
                });
                setErrors({});
            } else {
                showNotification('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз или свяжитесь с нами другим способом.', 'error');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            showNotification('Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Функция showNotification (оставь свою существующую)
    const showNotification = (message, type = 'success') => {
        // Твой существующий код уведомлений
        const existingNotification = document.querySelector('.custom-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        const notification = document.createElement('div');
        notification.className = `custom-notification custom-notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <div class="notification-icon">${type === 'success' ? '✅' : '❌'}</div>
                <div class="notification-message">${message}</div>
                <button class="notification-close">×</button>
            </div>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        notification.querySelector('.notification-close').addEventListener('click', () => {
            closeNotification(notification);
        });

        setTimeout(() => {
            closeNotification(notification);
        }, 5000);
    };

    const closeNotification = (notification) => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    };

    return (
        <section id="контакты" className="contacts">
            <h3 className="contacts-title">
                Свяжитесь с <span className="contacts-title-accent">нами</span>
            </h3>

            <div className="contacts-container">
                <div className="contacts-info">
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
                            className="contact-card"
                        >
                            <p className="contact-label">{item.label}</p>
                            <p className="contact-value">{item.value}</p>
                        </motion.a>
                    ))}
                </div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onSubmit={handleSubmit}
                    className="contact-form"
                    noValidate
                >
                    <h4 className="form-title">Напишите нам</h4>

                    <div className="form-fields">
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Ваше имя"
                                className={`form-input ${errors.name ? 'error' : ''}`}
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        <div className="form-group">
                            <input
                                type="tel" // Изменили type на "tel"
                                name="phone"
                                placeholder="Ваш телефон"
                                className={`form-input ${errors.phone ? 'error' : ''}`}
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Ваше сообщение"
                                rows="5"
                                className={`form-textarea ${errors.message ? 'error' : ''}`}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        <motion.button
                            type="submit"
                            className="form-submit-btn"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <span className="submit-loading">
                                    <span className="spinner"></span>
                                    Отправка...
                                </span>
                            ) : (
                                'Отправить сообщение'
                            )}
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
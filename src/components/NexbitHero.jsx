"use client";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, ChevronRight, Code, Smartphone, Globe } from 'lucide-react';
import { useState, useEffect } from "react";
import dynamic from 'next/dynamic';

// Динамический импорт для оптимизации
const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });
const { loadSlim } = dynamic(() => import("tsparticles-slim"), { ssr: false });

export default function NexbitHero() {
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
    setParticlesLoaded(true);
  };

  const techStack = [
    { name: "Next.js", color: "from-white to-gray-300" },
    { name: "React", color: "from-cyan-400 to-cyan-600" },
    { name: "Node.js", color: "from-green-500 to-green-700" },
    { name: "TypeScript", color: "from-blue-500 to-blue-700" },
    { name: "Tailwind", color: "from-teal-400 to-cyan-500" },
  ];

  const services = [
    { icon: Code, title: "Веб-приложения", desc: "От MVP до масштабируемых платформ" },
    { icon: Smartphone, title: "Мобильные приложения", desc: "Кроссплатформенные решения" },
    { icon: Globe, title: "IT-инфраструктура", desc: "Облачные решения и DevOps" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-nexbit-dark">
      {/* Фон с сеткой */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 209, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 209, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      {/* Анимированные градиенты */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-r from-nexbit-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-l from-nexbit-secondary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-nexbit-primary/5 via-nexbit-accent/5 to-nexbit-secondary/5 rounded-full blur-3xl" />
      </div>

      {/* Частицы */}
      {particlesLoaded && (
        <div className="absolute inset-0">
          <Particles
            id="nexbit-particles"
            init={particlesInit}
            options={{
              background: { color: { value: "transparent" } },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "repulse" },
                  onClick: { enable: true, mode: "push" }
                },
                modes: {
                  repulse: { distance: 100, duration: 0.4 },
                  push: { quantity: 4 }
                }
              },
              particles: {
                color: { value: ["#00D1FF", "#7B61FF", "#FF4D8D"] },
                links: {
                  color: "#00D1FF",
                  distance: 150,
                  enable: true,
                  opacity: 0.2,
                  width: 1
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 1,
                  straight: false
                },
                number: { density: { enable: true, area: 800 }, value: 30 },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 3 } }
              },
              detectRetina: true
            }}
          />
        </div>
      )}

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Левая часть - контент */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-nexbit-primary/10 to-nexbit-secondary/10 border border-nexbit-primary/30 text-nexbit-primary px-4 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <Sparkles className="w-4 h-4" />
              IT-решения для роста бизнеса
            </motion.div>

            {/* Заголовок */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Превращаем</span>
              <span className="gradient-text">ваши идеи</span>
              <span className="block">в рабочие</span>
              <span className="text-white">IT-системы</span>
            </h1>

            {/* Подзаголовок */}
            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Разрабатываем и внедряем цифровые решения, которые решают реальные 
              бизнес-задачи и приносят измеримый результат.
            </p>

            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                onClick={() => {
                  const section = document.getElementById('контакты');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-gradient px-8 py-4 rounded-xl flex items-center justify-center gap-3 text-lg font-semibold group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Обсудить проект
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => {
                  const section = document.getElementById('кейсы');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-nexbit-primary/30 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5 text-nexbit-primary" />
                Смотреть кейсы
              </motion.button>
            </div>

            {/* Технологический стек */}
            <div className="mb-10">
              <p className="text-gray-500 text-sm mb-4">Технологии, которые используем:</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className={`bg-gradient-to-r ${tech.color} bg-opacity-10 border border-white/5 rounded-lg px-4 py-2 backdrop-blur-sm`}
                    whileHover={{ y: -2 }}
                  >
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { number: "50+", label: "Реализованных проектов" },
                { number: "98%", label: "Довольных клиентов" },
                { number: "2+", label: "Года опыта" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-nexbit-primary to-nexbit-secondary bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Правая часть - интерактивная панель */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Главная карточка */}
            <div className="nexbit-card p-8 rounded-3xl border border-white/10 nexbit-glow">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-r from-nexbit-primary to-nexbit-secondary rounded-full animate-pulse" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-r from-nexbit-accent to-nexbit-secondary rounded-full animate-pulse delay-1000" />
              
              <h3 className="text-2xl font-bold text-white mb-6">
                Что мы делаем
              </h3>
              
              <div className="space-y-6">
                {services.map((service, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-nexbit-primary/20 to-nexbit-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-nexbit-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {service.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {service.desc}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 ml-auto group-hover:text-nexbit-primary transition-colors" />
                  </motion.div>
                ))}
              </div>

              {/* Дополнительная информация */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm">Среднее время разработки</span>
                  <span className="text-white font-semibold">2-4 месяца</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Техническая поддержка</span>
                  <span className="text-nexbit-primary font-semibold">Включена</span>
                </div>
              </div>
            </div>

            {/* Плавающие элементы */}
            {/* <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-nexbit-primary/5 to-nexbit-accent/5 rounded-2xl border border-nexbit-primary/20 backdrop-blur-sm" */}
            {/* /> */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-nexbit-secondary/5 to-nexbit-primary/5 rounded-2xl border border-nexbit-secondary/20 backdrop-blur-sm"
            />
          </motion.div>
        </div>

        {/* Индикатор прокрутки */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
        </motion.div> */}
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Eye, BarChart } from 'lucide-react';
import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    title: "CRM для логистики",
    description: "Разработали систему управления заказами и логистикой, которая сократила время обработки на 60%.",
    category: "Веб-приложение",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    metrics: [
      { label: "Сокращение времени", value: "60%" },
      { label: "Рост заказов", value: "25%" },
    ],
    color: "from-blue-500 to-cyan-500",
    image: "/portfolio/crm.jpg",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Мобильное приложение доставки",
    description: "Кроссплатформенное приложение для iOS и Android с интеграцией карт и онлайн-оплаты.",
    category: "Мобильное приложение",
    tech: ["React Native", "Firebase", "Redux"],
    metrics: [
      { label: "Установок за месяц", value: "1500+" },
      { label: "Рейтинг", value: "4.8/5" },
    ],
    color: "from-purple-500 to-pink-500",
    image: "/portfolio/delivery.jpg",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "E-commerce платформа",
    description: "Многофункциональный маркетплейс с системой рекомендаций и аналитикой в реальном времени.",
    category: "Интернет-магазин",
    tech: ["Vue.js", "Django", "Redis"],
    metrics: [
      { label: "Рост продаж", value: "300%" },
      { label: "Конверсия", value: "3.2%" },
    ],
    color: "from-orange-500 to-red-500",
    image: "/portfolio/ecommerce.jpg",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "Аналитическая панель для SaaS",
    description: "Дашборд для мониторинга метрик бизнеса с машинным обучением для прогнозирования.",
    category: "Дашборд",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    metrics: [
      { label: "Точность прогнозов", value: "94%" },
      { label: "Сокращение времени анализа", value: "70%" },
    ],
    color: "from-green-500 to-emerald-500",
    image: "/portfolio/analytics.jpg",
    demoLink: "#",
    githubLink: "#"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [hoveredItem, setHoveredItem] = useState(null);

  const filters = ["Все", "Веб-приложение", "Мобильное приложение", "Интернет-магазин", "Дашборд"];

  const filteredItems = activeFilter === "Все" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleProjectClick = (project) => {
    sessionStorage.setItem(
      "selectedProject",
      JSON.stringify({
        title: project.title,
        description: project.description
      })
    );
    
    setTimeout(() => {
      const contactsSection = document.getElementById('контакты');
      if (contactsSection) contactsSection.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <section id="кейсы" className="py-20 bg-nexbit-dark relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-nexbit-primary/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-nexbit-secondary/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Наши <span className="gradient-text">работы</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Реальные проекты, которые принесли измеримый результат нашим клиентам
          </p>
        </motion.div>

        {/* Фильтры */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "btn-gradient text-white"
                  : "bg-nexbit-card text-gray-400 hover:text-white hover:bg-white/5 border border-white/5"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Портфолио сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="nexbit-card rounded-2xl overflow-hidden group"
            >
              {/* Верхняя часть с изображением */}
              <div className="relative h-64 overflow-hidden">
                {/* Градиентный фон для заглушки */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20`} />
                
                {/* Бейдж категории */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-nexbit-dark/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                    {item.category}
                  </span>
                </div>

                {/* Иконки действий */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <a
                    href={item.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-nexbit-dark/80 backdrop-blur-sm flex items-center justify-center text-white hover:text-nexbit-primary transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </a>
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-nexbit-dark/80 backdrop-blur-sm flex items-center justify-center text-white hover:text-nexbit-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                {/* Анимированный контент при наведении */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  className="absolute inset-0 bg-nexbit-dark/90 backdrop-blur-sm flex items-center justify-center p-6"
                >
                  <div className="text-center">
                    <BarChart className="w-12 h-12 text-nexbit-primary mx-auto mb-4" />
                    <h4 className="text-white font-bold text-lg mb-2">Результаты проекта</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {item.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Нижняя часть с описанием */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Технологии */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Кнопка обсудить */}
                <motion.button
                  onClick={() => handleProjectClick(item)}
                  className="w-full py-3 rounded-xl border border-nexbit-primary/30 text-nexbit-primary hover:bg-nexbit-primary/10 flex items-center justify-center gap-2 transition-all duration-300 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Обсудить подобный проект
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="nexbit-card p-8 rounded-3xl border border-nexbit-primary/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Есть проект в голове?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Расскажите о своей идее, и мы бесплатно оценим сроки и стоимость реализации
            </p>
            <motion.button
              onClick={() => {
                const section = document.getElementById('контакты');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gradient px-8 py-4 rounded-xl font-semibold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Обсудить проект бесплатно
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
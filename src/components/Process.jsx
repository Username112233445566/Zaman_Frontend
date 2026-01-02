"use client";
import { motion } from "framer-motion";
import { Search, Palette, Code, TestTube, Rocket, MessageCircle } from 'lucide-react';

const processSteps = [
  {
    step: "01",
    title: "Анализ и консультация",
    description: "Бесплатно анализируем ваш проект, изучаем рынок и предлагаем оптимальное решение.",
    icon: Search,
    duration: "1-2 дня"
  },
  {
    step: "02",
    title: "Дизайн и прототипирование",
    description: "Создаем интерактивный прототип и дизайн, который нравится вам и вашим пользователям.",
    icon: Palette,
    duration: "1-3 недели"
  },
  {
    step: "03",
    title: "Разработка",
    description: "Пишем чистый, масштабируемый код. Работаем по Agile с еженедельными демо.",
    icon: Code,
    duration: "2-8 недель"
  },
  {
    step: "04",
    title: "Тестирование",
    description: "Проводим автоматизированное и ручное тестирование на всех типах устройств.",
    icon: TestTube,
    duration: "1-2 недели"
  },
  {
    step: "05",
    title: "Запуск и поддержка",
    description: "Помогаем с запуском, обучаем команду и предоставляем техническую поддержку.",
    icon: Rocket,
    duration: "Постоянно"
  }
];

export default function Process() {
  return (
    <section id="процесс" className="py-20 bg-nexbit-dark relative overflow-hidden">
      {/* Фоновые элементы */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-nexbit-primary/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Наш <span className="gradient-text">процесс</span> работы
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Прозрачные этапы от первой консультации до запуска и поддержки
          </p>
        </motion.div>

        {/* Процесс - десктоп версия */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Центральная линия */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nexbit-primary via-nexbit-secondary to-nexbit-accent" />
            
            {/* Шаги */}
            <div className="space-y-24">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Контент */}
                  <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="text-nexbit-primary text-3xl font-bold opacity-50">
                        {step.step}
                      </div>
                      <div className={`w-12 h-0.5 bg-gradient-to-r ${idx % 2 === 0 ? 'from-nexbit-primary to-transparent' : 'from-transparent to-nexbit-primary'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-sm text-nexbit-primary font-medium">
                      <div className="w-2 h-2 rounded-full bg-nexbit-primary animate-pulse" />
                      Срок: {step.duration}
                    </div>
                  </div>

                  {/* Центральный круг */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nexbit-primary to-nexbit-secondary flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Процесс - мобильная версия */}
        <div className="lg:hidden">
          <div className="relative pl-8">
            {/* Вертикальная линия */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-nexbit-primary to-nexbit-accent" />
            
            {/* Шаги */}
            <div className="space-y-12">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Точка на линии */}
                  <div className="absolute -left-8 top-6 w-8 h-8 rounded-full bg-nexbit-dark border-4 border-nexbit-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-nexbit-primary" />
                  </div>

                  {/* Контент */}
                  <div className="nexbit-card p-6 rounded-2xl ml-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-nexbit-primary text-xl font-bold">
                        {step.step}
                      </div>
                      <div className="w-8 h-0.5 bg-gradient-to-r from-nexbit-primary to-transparent" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-nexbit-primary font-medium">
                      <div className="w-2 h-2 rounded-full bg-nexbit-primary animate-pulse" />
                      Срок: {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Призыв к действию */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-nexbit-primary/10 to-nexbit-secondary/10 border border-nexbit-primary/30 rounded-2xl p-8">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Готовы начать?
              </h3>
              <p className="text-gray-400">
                Запишитесь на бесплатную консультацию, чтобы обсудить ваш проект
              </p>
            </div>
            
            <motion.button
              onClick={() => {
                const section = document.getElementById('контакты');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gradient px-8 py-4 rounded-xl font-semibold flex items-center gap-3 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Записаться на консультацию
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
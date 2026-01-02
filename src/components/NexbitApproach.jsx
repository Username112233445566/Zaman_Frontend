"use client";
import { motion } from "framer-motion";
import { Target, Clock, Shield, TrendingUp } from 'lucide-react';

const approaches = [
  {
    icon: Target,
    title: "Фокус на результат",
    description: "Не просто пишем код, а решаем бизнес-задачи. Каждый проект оцениваем по ROI.",
    color: "from-nexbit-primary to-cyan-500"
  },
  {
    icon: Clock,
    title: "Спринт за спринтом",
    description: "Работаем по Agile: вы видите прогресс каждые 2 недели и можете вносить правки.",
    color: "from-nexbit-secondary to-purple-500"
  },
  {
    icon: Shield,
    title: "Прозрачность",
    description: "Четкие сроки, фиксированная цена, ежедневные отчеты. Никаких скрытых платежей.",
    color: "from-nexbit-accent to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "Масштабирование",
    description: "Создаем архитектуру, которая будет расти вместе с вашим бизнесом.",
    color: "from-green-500 to-emerald-500"
  }
];

export default function NexbitApproach() {
  return (
    <section id="подход" className="py-20 bg-nexbit-dark relative">
      {/* Фон */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nexbit-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-nexbit-secondary/30 to-transparent" />
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
            Почему выбирают{" "}
            <span className="gradient-text">NexBit</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Мы не просто исполнители, а партнеры в цифровой трансформации вашего бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approaches.map((approach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="nexbit-card p-8 rounded-2xl relative group overflow-hidden"
            >
              {/* Анимированный фон */}
              <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Иконка */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${approach.color} bg-opacity-20 flex items-center justify-center mb-6`}>
                  <approach.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {approach.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {approach.description}
                </p>
              </div>

              {/* Декоративная линия */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-nexbit-primary to-nexbit-secondary group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Дополнительный блок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 nexbit-card p-8 rounded-3xl border-l-4 border-nexbit-primary"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">
                Начинаем с консультации
              </h3>
              <p className="text-gray-400">
                Прежде чем приступить к работе, проводим бесплатный аудит проекта, 
                анализируем рынок и предлагаем оптимальное техническое решение.
              </p>
            </div>
            
            <motion.button
              onClick={() => {
                const section = document.getElementById('контакты');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gradient px-8 py-4 rounded-xl font-semibold whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Записаться на консультацию
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
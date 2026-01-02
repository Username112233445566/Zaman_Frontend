"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { ArrowRight } from "lucide-react";

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
    <section id="услуги" className="py-20 bg-nexbit-dark relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-nexbit-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Наши <span className="gradient-text">услуги</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto"
        >
          Полный цикл разработки: от анализа задачи до запуска и поддержки
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="nexbit-card p-6 rounded-2xl group hover:border-nexbit-primary/30 transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-nexbit-primary/20 to-nexbit-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-2xl">✨</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <motion.button
                  onClick={() => handleOrderService(item.title, item.desc)}
                  className="text-nexbit-primary hover:text-nexbit-secondary text-sm font-medium flex items-center gap-2 group/btn"
                  whileHover={{ x: 5 }}
                >
                  Обсудить проект
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
                
                <div className="text-xs text-gray-500 px-2 py-1 rounded bg-white/5">
                  от 2 недель
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">
            Не нашли нужную услугу? Мы разработаем индивидуальное решение под ваши задачи
          </p>
          <motion.button
            onClick={() => {
              const section = document.getElementById('контакты');
              if (section) section.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-gradient px-8 py-4 rounded-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Обсудить индивидуальный проект
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
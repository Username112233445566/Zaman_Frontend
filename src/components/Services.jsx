"use client";
import { motion } from "framer-motion";
import { Code, Send, Zap } from 'lucide-react';
import { siteData } from "@/data/siteData";

const iconComponents = {
  Code,
  Send,
  Zap
};

export default function Services() {
  const { services, colors } = siteData;

  return (
    <section id="услуги" className="py-24 px-6 bg-gray-900 text-center">
      <h3 className="text-4xl font-bold mb-12 text-gray-200">
        Наши ключевые <span className="text-indigo-600">Услуги</span>
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, i) => {
          const IconComponent = iconComponents[item.icon];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-10 border border-gray-800 text-left flex flex-col cursor-pointer hover:border-indigo-600 transition-colors"
            >
              <div className="mb-4 text-indigo-600">
                <IconComponent size={24} />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-gray-200">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.desc}</p>
              <motion.button 
                className="mt-6 px-4 py-2 rounded-lg border border-indigo-600 text-indigo-600 font-semibold bg-transparent self-start transition-all hover:bg-indigo-600 hover:text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
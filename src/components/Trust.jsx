"use client";
import { motion } from "framer-motion";
import { Trophy, Zap, Users } from 'lucide-react';
import { siteData } from "../data/siteData";

const iconComponents = {
  Trophy,
  Zap,
  Users
};

export default function Trust() {
  const { achievements, colors } = siteData;

  return (
    <section id="достижения" className="py-24 px-6 bg-gray-800 text-center border-t border-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-16">
        <h3 className="text-4xl font-bold text-gray-200 mb-4">
          Почему нам <span className="text-emerald-500">доверяют</span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {achievements.map((stat, i) => {
            const IconComponent = iconComponents[stat.icon];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-8 bg-gray-700 rounded-2xl border border-emerald-500/30 shadow-lg shadow-emerald-500/20"
              >
                <div className="mb-3">
                  <IconComponent size={36} className="text-emerald-500" />
                </div>
                <p className="text-5xl font-extrabold text-emerald-500">{stat.num}</p>
                <p className="text-gray-400 mt-2">{stat.text}</p>
              </motion.div>
            );
          })}
        </div>

        <p className="text-gray-200 text-xl max-w-4xl mx-auto mt-8">
          <Users size={20} className="inline text-indigo-600 mr-2" />
          Мы — команда опытных разработчиков и дизайнеров. Наша цель — не просто выполнить задание, а создать <strong>ценный продукт</strong>, который принесёт вам реальную пользу.
        </p>
      </div>
    </section>
  );
}
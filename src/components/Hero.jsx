"use client";
import { motion } from "framer-motion";
import { Zap } from 'lucide-react';
import { siteData } from "../data/siteData";

export default function Hero() {
  const { colors } = siteData;

  return (
    <section className="py-32 px-6 bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center gap-6 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-200 leading-tight">
            Мы превращаем <br />
            <span className="text-indigo-600 border-b-4 border-emerald-500">ваши идеи</span> в цифровой продукт
          </h2>
          
          <p className="text-gray-400 text-xl max-w-2xl">
            Ваш надёжный партнёр в разработке <strong>сайтов, ботов</strong> и <strong>IT-проектов</strong> любой сложности. Гарантируем качество и сроки.
          </p>
          
          <div className="flex gap-4 flex-wrap justify-center mt-6">
            <motion.button 
              className="bg-indigo-600 text-gray-200 px-8 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-600/50 transition-all hover:shadow-indigo-600/70"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Заказать проект
            </motion.button>
            
            <motion.button 
              className="border-2 border-gray-400 text-gray-200 bg-transparent px-8 py-3 rounded-xl font-semibold transition-all hover:border-emerald-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Узнать больше
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-4xl border-2 border-gray-800 rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/20"
        >
          <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-400 text-2xl p-8">
            <Zap size={48} className="text-emerald-500 mr-4" />
            Визуализация цифрового продукта / MVP
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Contacts() {
  const { contactInfo, colors } = siteData;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена");
    alert("Сообщение отправлено! Мы свяжемся с вами в ближайшее время.");
  };

  return (
    <section id="контакты" className="py-24 px-6 bg-gray-900 text-center border-t border-gray-800">
      <h3 className="text-4xl font-bold mb-12 text-gray-200">
        Свяжитесь с <span className="text-indigo-600">нами</span>
      </h3>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          {contactInfo.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-6 border border-indigo-600/30 shadow-lg shadow-indigo-600/20 text-left no-underline text-gray-200 transition-all hover:shadow-indigo-600/40"
            >
              <p className="text-gray-400 font-medium mb-2">{item.label}</p>
              <p className="text-xl font-semibold text-indigo-600">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-gray-800 rounded-2xl p-8 border border-indigo-600/30"
        >
          <h4 className="text-2xl font-bold mb-6 text-gray-200">Напишите нам</h4>
          
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
            <input
              type="email"
              placeholder="Ваш email"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            />
            <textarea
              placeholder="Ваше сообщение"
              rows="5"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              required
            ></textarea>
            
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-gray-200 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-600/50 transition-all hover:shadow-indigo-600/70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Отправить сообщение
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
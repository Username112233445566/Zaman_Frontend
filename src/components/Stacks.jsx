"use client";
import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";

export default function Stacks() {
  const { technologies } = siteData;

  return (
    <section id="технологии" className="py-16 px-6 bg-gray-800 text-center border-t border-gray-700">
      <h3 className="text-3xl font-semibold mb-10 text-gray-200">
        Наши ключевые <span className="text-emerald-500">Технологии</span>
      </h3>
      
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {technologies.map((stack) => (
          <motion.img
            key={stack}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ 
              scale: 1.1, 
              filter: 'grayscale(0%) drop-shadow(0 0 10px rgba(76, 81, 191, 0.8))' 
            }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            src={`https://skillicons.dev/icons?i=${stack}`}
            alt={stack}
            className="w-16 h-16 cursor-pointer grayscale transition-all duration-300 hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}
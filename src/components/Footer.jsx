"use client";
import { Heart } from 'lucide-react';
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="py-8 bg-nexbit-card border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <div className="text-2xl font-bold mb-2">
                            <span className="text-white">Nex</span>
                            <span className="text-nexbit-primary">Bit</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © {currentYear} NexBit. Все права защищены.
                        </p>
                    </div>
                    
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Сделано с <Heart className="w-4 h-4 text-nexbit-accent fill-nexbit-accent" /> в Бишкеке
                    </p>
                    
                    <div className="flex gap-4">
                        {[
                            { label: 'Telegram', href: 'https://t.me/nexbit_dev' },
                            { label: 'Instagram', href: 'https://instagram.com/nexbit_dev' },
                            { label: 'GitHub', href: 'https://github.com/nexbit' }
                        ].map((social, idx) => (
                            <motion.a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-nexbit-primary text-sm transition-colors"
                                whileHover={{ y: -2 }}
                            >
                                {social.label}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
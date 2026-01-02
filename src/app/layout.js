import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: "NexBit - Цифровые решения для роста бизнеса",
  description: "Разрабатываем и внедряем IT-решения, которые решают реальные бизнес-задачи и приносят измеримый результат.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
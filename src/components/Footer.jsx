import { siteData } from "@/data/siteData";

export default function Footer() {
  const { colors } = siteData;

  return (
    <footer className="bg-gray-950 text-gray-400 py-10 text-center text-sm border-t border-gray-800">
      <p>© 2025 ZAMAN Studio. Все права защищены.</p>
      <p className="mt-2 opacity-80">
        Разработано с <span className="text-indigo-600">любовью</span> и кодом.
      </p>
    </footer>
  );
}
// ФАЙЛ: src/components/Footer.jsx
export default function Footer() {
    return (
        <footer className="py-8 bg-dark-950 border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400 mb-2">
                    © 2025 ZAMAN Studio. Все права защищены.
                </p>
                <p className="text-gray-500 text-sm">
                    Разработано с <span className="text-primary-500">любовью</span> и кодом.
                </p>
            </div>
        </footer>
    );
}
import { siteData } from "@/data/siteData";
import "../styles/Footer.css";

export default function Footer() {
    const { colors } = siteData;

    return (
        <footer className="footer">
            <p className="footer-text">© 2025 ZAMAN Studio. Все права защищены.</p>
            <p className="footer-subtext">
                Разработано с <span className="footer-heart">любовью</span> и кодом.
            </p>
        </footer>
    );
}
// ФАЙЛ: src/app/page.jsx
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Trust from "../components/Trust";
import Contacts from "../components/Contacts";
import Stacks from "../components/Stacks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-dark-900">
      <Header />
      <Hero />
      <Services />
      <Trust />
      <Stacks />
      <Contacts />
      <Footer />
    </main>
  );
}
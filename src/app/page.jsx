import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Trust from "../components/Trust";
import Contacts from "../components/Contacts";
import Stacks from "../components/Stacks";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-gray-900 text-gray-200">
      <Header />
      <Hero />
      <Services />
      <Trust />
      <Contacts />
      <Stacks />
      <Footer />
    </main>
  );
}
import Header from "@/components/Header";
import NexbitHero from "@/components/NexbitHero";
import NexbitApproach from "@/components/NexbitApproach";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Stacks from "@/components/Stacks";
import Trust from "@/components/Trust";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-nexbit-dark overflow-hidden">
      <Header />
      <NexbitHero />
      <NexbitApproach />
      <Services />
      <Portfolio />
      <Process />
      <Stacks />
      <Trust />
      <Contacts />
      <Footer />
    </main>
  );
}
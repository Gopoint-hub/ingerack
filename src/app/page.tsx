import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ValueProps } from "@/components/ValueProps";
import { ClientsSection } from "@/components/ClientsSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { AlliancesSection } from "@/components/AlliancesSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValueProps />
        <ClientsSection />
        <SolutionsSection />
        <ServicesSection />
        <ProductsSection />
        <ProjectsSection />
        <ContactSection />
        <AlliancesSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

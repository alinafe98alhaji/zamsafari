import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CorporateStructureSection from "@/components/CorporateStructureSection";
import StrategicPartnershipsSection from "@/components/StrategicPartnershipsSection";
import FestivalTickets from "@/components/FestivalTickets";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FestivalTickets />
      <CorporateStructureSection />
      <StrategicPartnershipsSection />
      {/* next sections */}
    </main>
  );
}

import HeroSection from "@/components/hero/HeroSection";
import ServiceSection from "@/components/service/ServiceSection";
import ServiceProcess from "@/components/process/ServiceProcess";
import TrustSignals from "@/components/trust/TrustSignals";
import VehicleStandards from "@/components/vehicle/VehicleStandards";
import PrimaryCTA from "@/components/cta/PrimaryCTA";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <ServiceProcess />
      <TrustSignals />
      <VehicleStandards />
      <PrimaryCTA />
    </main>
  );
}

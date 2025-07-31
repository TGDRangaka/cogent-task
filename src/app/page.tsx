import HeroComponent from "@/components/home/hero.component";
import OverviewComponent from "@/components/home/overview.component";
import BenefitsComponent from "@/components/home/benefits.component";
import SpeakersComponent from "@/components/home/speakers.component";
import ContactComponent from "@/components/home/contact.component";
import AgendaComponent from "@/components/home/agenda.component";
import { ScrollAnimations } from "@/components/ui/scrolleAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <ScrollAnimations />
      {/* Hero Section - Updated for full responsiveness */}
      <HeroComponent />

      {/* Event Overview - Updated for responsiveness */}
      <OverviewComponent />

      {/* Key Benefits - Updated responsive grid */}
      <BenefitsComponent />

      {/* Speakers - Updated responsive grid */}
      <SpeakersComponent />

      {/* Agenda - Updated for mobile stacking */}
      <AgendaComponent />

      {/* Registration - Updated responsive form */}
      <ContactComponent />

    </div>
  );
}

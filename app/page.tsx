import HomeHero from "./components/sections/HomeHero";
import QuickLeadStrip from "./components/sections/QuickLeadStrip";
import TrustSection from "./components/sections/TrustSection";
import EligibilityOverview from "./components/sections/EligibilityOverview";
import CtaStrip from "./components/sections/CtaStrip";
import AboutSection from "./components/sections/AboutSection";
import CitizenshipInfoSection from "./components/sections/CitizenshipInfoSection";
import EligibilityCriteria from "./components/sections/EligibilityCriteria";
import ProcessSection from "./components/sections/ProcessSection";
import ProcessLeadSection from "./components/sections/ProcessLeadSection";
import FaqSection from "./components/sections/FaqSection";
import FinalCta from "./components/sections/FinalCta";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <QuickLeadStrip context="Home page" />
      <TrustSection />
      <EligibilityOverview />
      <CtaStrip />
      <AboutSection />
      <CitizenshipInfoSection />
      <EligibilityCriteria />
      <ProcessSection />
      <ProcessLeadSection
        heading="Ready to Start Your Citizenship Application?"
        description="Our solicitors will assess your eligibility, identify the right route, and guide you through every step of your British Citizenship application."
        context="Home page enquiry"
      />
      <FaqSection />
      <FinalCta />
    </div>
  );
}

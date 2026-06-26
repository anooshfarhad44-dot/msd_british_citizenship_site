import HomeHero from "./components/sections/HomeHero";
import FinalCta from "./components/sections/FinalCta";
import NewTrustSection from "./components/sections/NewTrustSection";
import NewEligibilitySection from "./components/sections/NewEligibilitySection";
import NewProcessSection from "./components/sections/NewProcessSection";
import NewTestimonialsSection from "./components/sections/NewTestimonialsSection";
import NewFaqSection from "./components/sections/NewFaqSection";
import NewLeadSection from "./components/sections/NewLeadSection";

export default function Home() {
  return (
    <div>
      <HomeHero />
      <NewLeadSection context="Home page" />
      <NewTrustSection />
      <NewEligibilitySection />
      <NewProcessSection />
      <NewTestimonialsSection />
      <NewFaqSection />
      <FinalCta />
    </div>
  );
}

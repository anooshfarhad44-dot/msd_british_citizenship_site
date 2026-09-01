import HomeHero from "./components/sections/HomeHero";
import NewLeadSection from "./components/sections/NewLeadSection";
import FinalCta from "./components/sections/FinalCta";
import NewTrustSection from "./components/sections/NewTrustSection";
import NewEligibilitySection from "./components/sections/NewEligibilitySection";
import NewProcessSection from "./components/sections/NewProcessSection";
import NewTestimonialsSection from "./components/sections/NewTestimonialsSection";
import NewFaqSection from "./components/sections/NewFaqSection";
import OfficialResources from "./components/sections/OfficialResources";
import { getReviews, getFaqs, getProcessSteps, assetUrl } from "./lib/api";
import type { CmsReview } from "./components/sections/NewTestimonialsSection";

export const revalidate = 60;

export default async function Home() {
  const [cmsReviews, cmsFaqs, cmsSteps] = await Promise.all([
    getReviews(),
    getFaqs(),
    getProcessSteps(),
  ]);

  const initialReviews: CmsReview[] | undefined = cmsReviews
    ? cmsReviews.map((r) => ({
        name: r.name,
        date: r.date,
        reviewTitle: r.review_title,
        reviewBody: r.review_body,
        stars: r.stars,
        image: assetUrl(r.image ?? null),
      }))
    : undefined;

  const initialFaqs = cmsFaqs
    ? cmsFaqs.map((f) => ({ question: f.question, answer: f.answer }))
    : undefined;

  const initialSteps = cmsSteps
    ? cmsSteps.map((s) => ({ title: s.title, description: s.text }))
    : undefined;

  return (
    <div>
      <HomeHero />
      <NewLeadSection context="Home page" />
      <NewTrustSection />
      <NewEligibilitySection />
      <NewProcessSection initialSteps={initialSteps} />
      <NewTestimonialsSection initialReviews={initialReviews} />
      <NewFaqSection initialFaqs={initialFaqs} />
      <OfficialResources />
      <FinalCta />
    </div>
  );
}

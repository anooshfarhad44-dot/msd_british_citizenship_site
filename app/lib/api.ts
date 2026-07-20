/**
 * British Citizenship Site — CMS API Client
 * Fetches public content from cms-backend
 * Used in Server Components with Next.js cache/revalidate
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/api/british-citizenship`
  : 'http://localhost:5000/api/british-citizenship';

// ─── Image proxy helper ───────────────────────────────────────────────────────
export function assetUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  if (path.startsWith('/assets/')) {
    return `/api/images/${path.replace(/^\/assets\//, '')}`;
  }
  return path;
}

// ─── Generic fetch — returns null on failure so site never crashes ─────────────
async function fetchCMS<T>(path: string, revalidate = 60): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${path}`, {
      next: { revalidate },
    });
    if (!res.ok) return null;
    return res.json() as Promise<T>;
  } catch {
    return null;
  }
}

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Review {
  _id: string;
  name: string;
  date: string;
  review_title: string;
  review_body: string;
  stars: number;
  image?: string | null;
  is_active: boolean;
  sort_order: number;
}

export interface Feature {
  _id: string;
  title: string;
  description: string;
  is_active: boolean;
  sort_order: number;
}

export interface ProcessStep {
  _id: string;
  title: string;
  text: string;
  is_active: boolean;
  sort_order: number;
}

export interface Faq {
  _id: string;
  question: string;
  answer: string;
  is_active: boolean;
  sort_order: number;
}

export interface Fee {
  _id: string;
  label: string;
  price: string;
  category: 'solicitor' | 'home_office';
  note?: string;
  is_main: boolean;
  is_active: boolean;
  sort_order: number;
}

export interface Logo {
  _id: string;
  src: string;
  alt: string;
  is_active: boolean;
  sort_order: number;
}

export interface BlogSection {
  type: 'intro' | 'heading_text' | 'list' | 'cards' | 'callout';
  heading?: string;
  text?: string;
  items?: string[];
  cards?: { title: string; text: string }[];
}

export interface BlogPostAPI {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: BlogSection[];
  is_active: boolean;
  sort_order: number;
}

export interface SiteSettings {
  _id?: string;
  contact_phone: string;
  contact_phone_href: string;
  contact_email: string;
  contact_email_href: string;
  contact_whatsapp: string;
  contact_whatsapp_href: string;
  parent_site_name: string;
  parent_site_url: string;
  nav_items: { href: string; label: string }[];
  countries: string[];
  citizenship_services: string[];
  home_highlights: string[];
  eligibility_routes: string[];
}

// ─── Public content fetchers ──────────────────────────────────────────────────

export async function getReviews() {
  return fetchCMS<Review[]>('/reviews');
}

export async function getFeatures() {
  return fetchCMS<Feature[]>('/features');
}

export async function getProcessSteps() {
  return fetchCMS<ProcessStep[]>('/process-steps');
}

export async function getFaqs() {
  return fetchCMS<Faq[]>('/faqs');
}

export async function getFees() {
  return fetchCMS<Fee[]>('/fees');
}

export async function getLogos() {
  return fetchCMS<Logo[]>('/logos');
}

export async function getBlogPosts() {
  return fetchCMS<BlogPostAPI[]>('/blog-posts');
}

export async function getBlogPostBySlug(slug: string) {
  return fetchCMS<BlogPostAPI>(`/blog-posts/slug/${slug}`);
}

export async function getSettings() {
  return fetchCMS<SiteSettings>('/settings');
}

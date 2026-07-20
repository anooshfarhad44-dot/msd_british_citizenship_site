import Link from "next/link";
import Reveal from "../../components/ui/Reveal";
import NewLeadSection from "../../components/sections/NewLeadSection";
import { getBlogPostBySlug, getBlogPosts, assetUrl } from "../../lib/api";
import { blogPosts as fallbackPosts } from "../../data/site";
import { notFound } from "next/navigation";

export const revalidate = 60;

export async function generateStaticParams() {
  const cmsPosts = await getBlogPosts();
  const posts = cmsPosts ?? fallbackPosts;
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Try CMS first, fall back to static data
  const cmsPost = await getBlogPostBySlug(slug);

  if (cmsPost) {
    const imgSrc = assetUrl(cmsPost.image) ?? cmsPost.image;

    // Build HTML content from structured sections
    const contentHtml = cmsPost.content
      .map((section) => {
        if (section.type === "intro" || section.type === "heading_text") {
          return `<div class="border-l-4 border-[#7a003c] pl-6 py-2 bg-gradient-to-r from-[#e6f0f8] to-transparent rounded-r-lg mb-6">
            ${section.heading ? `<h2 class="text-2xl font-extrabold text-[#192c42] mb-3">${section.heading}</h2>` : ""}
            ${section.text ? `<p class="text-[#4a6480] text-lg leading-relaxed">${section.text}</p>` : ""}
          </div>`;
        }
        if (section.type === "list") {
          const items = (section.items ?? [])
            .map((item) => `<li class="flex items-start gap-3 p-4 bg-white rounded-xl border border-[#d0dce8] shadow-sm"><span class="flex-shrink-0 w-8 h-8 bg-[#7a003c] text-white rounded-full flex items-center justify-center font-bold text-sm mt-0.5">✓</span><span class="text-[#4a6480]">${item}</span></li>`)
            .join("");
          return `<div class="mb-6">
            ${section.heading ? `<h2 class="text-2xl font-extrabold text-[#192c42] mb-4">${section.heading}</h2>` : ""}
            <ul class="grid gap-3">${items}</ul>
          </div>`;
        }
        if (section.type === "callout") {
          return `<div class="p-6 bg-[#f4c400]/10 border-l-4 border-[#f4c400] rounded-xl mb-6">
            ${section.heading ? `<strong class="block text-[#7a003c] font-extrabold mb-1">${section.heading}</strong>` : ""}
            ${section.text ? `<p class="text-[#556b6e] text-sm">${section.text}</p>` : ""}
          </div>`;
        }
        if (section.type === "cards" && section.cards) {
          const cards = section.cards
            .map((card) => `<div class="p-5 bg-white rounded-xl border border-[#d0dce8]"><h4 class="font-bold text-[#7a003c] mb-2">${card.title}</h4><p class="text-[#4a6480] text-sm">${card.text}</p></div>`)
            .join("");
          return `<div class="mb-6">
            ${section.heading ? `<h2 class="text-2xl font-extrabold text-[#192c42] mb-4">${section.heading}</h2>` : ""}
            <div class="grid gap-4">${cards}</div>
          </div>`;
        }
        return "";
      })
      .join("");

    return (
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white">
          <div className="w-full max-w-4xl mx-auto px-4">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold text-sm mb-6 transition-colors"
              >
                ← Back to Blog
              </Link>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#f4c400] bg-white/10 px-3 py-1 rounded-full">
                  {cmsPost.category}
                </span>
                <span className="text-white/60 text-xs">{cmsPost.date}</span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {cmsPost.title}
              </h1>
            </Reveal>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="w-full max-w-4xl mx-auto px-4">
            <Reveal>
              <div className="aspect-[16/9] relative overflow-hidden rounded-2xl mb-8">
                {/* Use plain <img> for CMS assets that go through the proxy */}
                <img
                  src={imgSrc}
                  alt={cmsPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="prose prose-lg max-w-none text-[#4a6480]"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
              <div className="mt-10 p-8 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-2xl text-white text-center">
                <h3 className="text-xl font-bold mb-3">
                  Need help with your citizenship application?
                </h3>
                <p className="text-white/80 text-sm md:text-base mb-6">
                  Our expert solicitors are ready to assist you through every step.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 rounded-full font-black bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] hover:-translate-y-1 transition-all duration-200"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <NewLeadSection context={`Blog post: ${cmsPost.title}`} />
      </div>
    );
  }

  // Fall back to static data
  const post = fallbackPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white">
        <div className="w-full max-w-4xl mx-auto px-4">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold text-sm mb-6 transition-colors"
            >
              ← Back to Blog
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#f4c400] bg-white/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-white/60 text-xs">{post.date}</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="w-full max-w-4xl mx-auto px-4">
          <Reveal>
            <div className="aspect-[16/9] relative overflow-hidden rounded-2xl mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="prose prose-lg max-w-none text-[#4a6480]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="mt-10 p-8 bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-2xl text-white text-center">
              <h3 className="text-xl font-bold mb-3">
                Need help with your citizenship application?
              </h3>
              <p className="text-white/80 text-sm md:text-base mb-6">
                Our expert solicitors are ready to assist you through every step.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 rounded-full font-black bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] hover:-translate-y-1 transition-all duration-200"
              >
                Book a Free Consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <NewLeadSection context={`Blog post: ${post.title}`} />
    </div>
  );
}

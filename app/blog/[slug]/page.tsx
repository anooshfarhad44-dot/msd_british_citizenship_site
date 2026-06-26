import Link from "next/link";
import Reveal from "../../components/ui/Reveal";
import NewLeadSection from "../../components/sections/NewLeadSection";
import { blogPosts } from "../../data/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
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
            <div className="aspect-[16/9] bg-gradient-to-br from-[#7a003c] to-[#5a0028] rounded-2xl flex items-center justify-center mb-8">
              <span className="text-7xl">🇬🇧</span>
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

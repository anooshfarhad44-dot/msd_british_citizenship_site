import Link from "next/link";
import { blogPosts } from "../../data/site";
import { notFound } from "next/navigation";
import ProcessLeadSection from "../../components/sections/ProcessLeadSection";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#7a003c] to-[#7a003c] text-white">
        <div className="w-full max-w-[800px] mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-bold text-sm mb-6 transition-colors">
            ← Back to Blog
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#f4c400] bg-white/10 px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-white/60 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white m-0">{post.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-[800px] mx-auto px-4">
          <div className="aspect-[16/9] bg-gradient-to-br from-[#7a003c] to-[#7a003c] rounded-2xl flex items-center justify-center mb-10">
            <span className="text-8xl">🇬🇧</span>
          </div>
          <div
            className="prose prose-lg max-w-none text-[#4a6480]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-12 p-8 bg-gradient-to-br from-[#7a003c] to-[#7a003c] rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-3">Need help with your citizenship application?</h3>
            <p className="text-white/80 mb-6">Our expert solicitors are ready to assist you through every step of the process.</p>
            <Link href="/contact" className="inline-flex items-center justify-center min-h-[48px] px-8 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#7a003c] hover:-translate-y-0.5 transition-all duration-200">
              Book a free consultation
            </Link>
          </div>
        </div>
      </section>

      <ProcessLeadSection
        heading="Need Help With Your Citizenship Application?"
        description="Our specialist solicitors can review your circumstances and guide you through the correct route to British citizenship."
        context={`Blog post: ${post.title}`}
        bg="slate"
      />
    </div>
  );
}

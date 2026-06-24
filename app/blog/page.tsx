import Link from "next/link";
import { blogPosts } from "../data/site";
import ProcessLeadSection from "../components/sections/ProcessLeadSection";
import QuickLeadStrip from "../components/sections/QuickLeadStrip";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-5 bg-gradient-to-br from-[#0c2340] to-[#1b6fa8] text-white">
        <div className="w-full max-w-[1120px] mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
            Latest Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white m-0 mb-4">
            British Citizenship Blog
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Stay up to date with the latest news, guidance, and tips on British Citizenship applications and UK immigration law.
          </p>
        </div>
      </section>

      <QuickLeadStrip context="Blog listing page" />

      {/* Posts */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1120px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-[#d0dce8] overflow-hidden hover:shadow-[0_20px_50px_rgba(12,35,64,0.12)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-[#0c2340] to-[#1b6fa8] flex items-center justify-center">
                  <span className="text-6xl">🇬🇧</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1b6fa8] bg-[#e6f0f8] px-2.5 py-1 rounded-full">{post.category}</span>
                    <span className="text-[10px] text-[#4a6480]">{post.date}</span>
                  </div>
                  <h3 className="font-extrabold text-[#0c2340] text-lg mb-2 group-hover:text-[#1b6fa8] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-[#4a6480] text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-[#1b6fa8] font-black text-sm group-hover:gap-2 transition-all">
                    Read more <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProcessLeadSection
        heading="Have Questions About British Citizenship?"
        description="Our solicitors are available to answer any queries and provide expert legal advice tailored to your specific situation."
        context="Blog page enquiry"
        bg="slate"
      />
    </div>
  );
}

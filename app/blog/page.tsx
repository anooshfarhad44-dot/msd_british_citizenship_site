import Link from "next/link";
import Reveal from "../components/ui/Reveal";
import NewLeadSection from "../components/sections/NewLeadSection";
import { blogPosts } from "../data/site";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028] text-white">
        <div className="w-full max-w-6xl mx-auto px-4 text-center">
          <Reveal>
            <div className="inline-flex items-center px-4 py-2 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
              Latest Insights
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              British Citizenship Blog
            </h1>
            <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Stay up to date with the latest news and guidance on British citizenship applications.
            </p>
          </Reveal>
        </div>
      </section>

      <NewLeadSection context="Blog listing page" />

      {/* Posts */}
      <section className="py-16 bg-gradient-to-br from-white to-[#fff5f8]">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-[#d0dce8] overflow-hidden hover:border-[#f4c400] hover:shadow-[0_20px_50px_rgba(244,196,0,0.15)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#7a003c] to-[#5a0028] flex items-center justify-center">
                    <span className="text-6xl">🇬🇧</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#7a003c] bg-[#fff5f8] px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-[#4a6480]">{post.date}</span>
                    </div>
                    <h3 className="font-extrabold text-[#7a003c] text-lg mb-2 group-hover:text-[#5a0028] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-[#4a6480] text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-[#7a003c] font-black text-sm group-hover:gap-2 transition-all">
                      Read more
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-[#7a003c] to-[#5a0028]">
        <div className="w-full max-w-6xl mx-auto px-4">
          <Reveal>
            <div className="text-center">
              <h3 className="text-2xl font-black text-white mb-3">
                Have Questions About British Citizenship?
              </h3>
              <p className="text-white/85 text-sm md:text-base max-w-2xl mx-auto mb-6">
                Our solicitors are available to answer any queries and provide expert advice.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#f4c400] to-[#d4ab00] text-[#7a003c] text-base font-black rounded-full shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-1 transition-all duration-200"
              >
                Get free expert advice
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

"use client";

export interface ReviewProps {
  name: string;
  date: string;
  reviewTitle: string;
  reviewBody: string;
  stars: number;
  image?: string | null;
}

interface ReviewCardComponentProps {
  review: ReviewProps;
  onOpenModal: (review: ReviewProps) => void;
}

export default function ReviewCard({ review, onOpenModal }: ReviewCardComponentProps) {
  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();

  return (
    <div
      onClick={() => onOpenModal(review)}
      className="w-full cursor-pointer group rounded-2xl bg-gradient-to-r from-white via-white to-[#f6fafb] border border-[#d0dce8] shadow-[0_4px_15px_rgba(12,35,64,0.06)] hover:shadow-[0_10px_25px_rgba(12,35,64,0.12)] hover:border-[#7a003c]/30 transition-all duration-300 px-3 py-2.5"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className="relative shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#7a003c] to-[#7a003c] text-white font-black text-xs sm:text-sm flex items-center justify-center shadow-[0_4px_12px_rgba(27,111,168,0.25)]">
              {getInitials(review.name)}
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#00b67a] border-2 border-white z-10" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap min-w-0">
              <span className="font-black text-[#7a003c] text-xs sm:text-sm truncate max-w-[120px] sm:max-w-none">{review.name}</span>
              <span className="text-[10px] font-semibold text-[#8a9aa0] shrink-0">{review.date}</span>
            </div>
            <p className="hidden sm:block text-xs text-[#4a6480] truncate mt-0.5">"{review.reviewTitle}"</p>
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 border-t border-dashed border-[#d0dce8] pt-1.5 sm:pt-0 sm:border-0">
          <div className="flex items-center gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${i < review.stars ? "fill-[#ffb400]" : "fill-[#d0dce8]"}`} viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="hidden lg:flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00b67a]/10 border border-[#00b67a]/20 text-[#00b67a] text-[10px] font-black whitespace-nowrap">
              ✓ Verified
            </div>
            <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#7a003c] group-hover:text-[#f47a2a] transition-colors">
              <span className="sm:inline">Read</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

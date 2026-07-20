import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer";
import FloatingWhatsApp from "./components/layout/FloatingWhatsApp";
import ToastProvider from "./components/ui/ToastProvider";
import { getReviews, assetUrl } from "./lib/api";
import type { ReviewProps } from "./components/layout/Header/ReviewCard";

const nunitoSans = Nunito_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "British Citizenship Solicitors in Manchester | MSD Solicitors",
  description:
    "MSD Solicitors provide expert British Citizenship application support for spouses, ILR holders, and EU settled status applicants.",
  icons: {
    icon: [
      { url: "/bc_logo.png", type: "image/png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/bc_logo.png",
    apple: "/bc_logo.png",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cmsReviews = await getReviews();

  const initialReviews: ReviewProps[] | undefined = cmsReviews
    ? cmsReviews.map((r) => ({
        name: r.name,
        date: r.date,
        reviewTitle: r.review_title,
        reviewBody: r.review_body,
        stars: r.stars,
        image: assetUrl(r.image ?? null) ?? undefined,
      }))
    : undefined;

  return (
    <html lang="en" className={`${nunitoSans.variable} h-full`}>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-[#192c42] overflow-x-hidden"
      >
        <ToastProvider />
        <Header initialReviews={initialReviews} />
        <main className="flex-1">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}

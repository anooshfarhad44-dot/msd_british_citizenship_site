import Link from "next/link";
import { citizenshipRoutes } from "../data/site";
import ProcessLeadSection from "../components/sections/ProcessLeadSection";
import QuickLeadStrip from "../components/sections/QuickLeadStrip";

export default function RoutesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-5 bg-gradient-to-br from-[#7a003c] to-[#7a003c] text-white">
        <div className="w-full max-w-[1120px] mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1.5 border border-[#f4c400]/40 rounded-full bg-white/10 text-[#f4c400] font-extrabold text-xs tracking-widest uppercase backdrop-blur-sm mb-4">
            Citizenship Routes
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white m-0 mb-4">
            Routes to British Citizenship
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            Understanding your pathway to British citizenship is essential. Each route has different
            requirements — our solicitors will identify the right one for you.
          </p>
        </div>
      </section>

      <QuickLeadStrip context="Routes page" />

      {/* Routes */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-[1120px] mx-auto px-4">

          {/* Route 1: Spouse */}
          <div className="mb-16 bg-white rounded-3xl border border-[#d0dce8] shadow-[0_8px_30px_rgba(12,35,64,0.06)] overflow-hidden">
            <div className="bg-gradient-to-r from-[#7a003c] to-[#5a0028] p-8 text-white">
              <div className="text-xs font-black uppercase tracking-widest text-[#f4c400] mb-2">Route 1</div>
              <h2 className="text-2xl md:text-3xl font-bold m-0">Applying for British Citizenship as a Spouse</h2>
              <p className="text-white/80 mt-2">If you are married to or in a civil partnership with a British Citizen</p>
            </div>
            <div className="p-8">
              <p className="text-[#4a6480] text-lg leading-relaxed mb-6">
                If you are married to or in a civil partnership with a British Citizen, you may be able to apply
                for citizenship. To be eligible, you must be able to prove that you were in the UK for at least
                3 years immediately prior to your application.
              </p>
              <p className="text-[#4a6480] leading-relaxed mb-6">
                In addition to this, you must have obtained at least one of the following:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Indefinite leave to remain (ILR) in the UK",
                  "'Settled status' (indefinite leave to remain under the EU Settlement Scheme)",
                  "Indefinite leave to enter the UK (permission to move to the UK permanently from abroad)",
                  "A permanent residence document to prove you have permanent residence status",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#f5f8fd] rounded-xl border border-[#d0dce8]">
                    <span className="w-5 h-5 bg-[#f4c400] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="text-sm text-[#4a6480]">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#4a6480] leading-relaxed">
                Once you have met the above criteria, you will also need to prove your knowledge of English,
                be of good character, and pass a test about life in the UK.
              </p>
            </div>
          </div>

          {/* Route 2: ILR/Settled Status */}
          <div className="mb-16 bg-white rounded-3xl border border-[#d0dce8] shadow-[0_8px_30px_rgba(12,35,64,0.06)] overflow-hidden">
            <div className="bg-gradient-to-r from-[#7a003c] to-[#5a0028] p-8 text-white">
              <div className="text-xs font-black uppercase tracking-widest text-[#f4c400] mb-2">Route 2</div>
              <h2 className="text-2xl md:text-3xl font-bold m-0">Applying with ILR or Settled Status</h2>
              <p className="text-white/80 mt-2">Once you have held ILR or settled status for at least 12 months</p>
            </div>
            <div className="p-8">
              <p className="text-[#4a6480] text-lg leading-relaxed mb-6">
                Once you have obtained Indefinite Leave to Remain (ILR) or settled status under the EU settlement
                scheme, you may be eligible to apply for British citizenship. To apply, you must have lived in the
                UK for 5 years and have had one of the following for at least 12 months:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                {[
                  "Indefinite leave to remain in the UK",
                  "'Settled status' under the EU Settlement Scheme",
                  "Indefinite leave to enter the UK",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#f5f8fd] rounded-xl border border-[#d0dce8]">
                    <span className="w-5 h-5 bg-[#7a003c] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="text-sm text-[#4a6480]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-[#f4c400]/10 border-l-4 border-[#f4c400] rounded-xl mb-4">
                <strong className="block text-[#7a003c] font-extrabold mb-1">Post-Brexit Change (from 1st January 2021)</strong>
                <p className="text-[#556b6e] text-sm m-0">If you had permanent residence status before you obtained settled status, you can count that time towards the required 12 months.</p>
              </div>
            </div>
          </div>

          {/* Route 3: Permanent Residence */}
          <div className="mb-16 bg-white rounded-3xl border border-[#d0dce8] shadow-[0_8px_30px_rgba(12,35,64,0.06)] overflow-hidden">
            <div className="bg-gradient-to-r from-[#5a0028] to-[#7a003c] p-8 text-white">
              <div className="text-xs font-black uppercase tracking-widest text-[#f4c400] mb-2">Route 3</div>
              <h2 className="text-2xl md:text-3xl font-bold m-0">Applying with Permanent Residence Status</h2>
              <p className="text-white/80 mt-2">For EU, EEA, and Swiss nationals</p>
            </div>
            <div className="p-8">
              <p className="text-[#4a6480] text-lg leading-relaxed mb-6">
                If you or a family member are from the EU, EEA or Switzerland, you may have already obtained
                permanent residence status automatically after living in the UK for 5 years. If this applies,
                you have to prove you have lived in the UK for 12 months after getting permanent residence status.
              </p>
              <p className="text-[#4a6480] leading-relaxed mb-6">
                Recent changes to immigration laws mean that you can only apply for British citizenship with
                permanent residence status if:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "You already have a permanent residence document",
                  "You do not also have settled status under the EU Settlement Scheme",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#f5f8fd] rounded-xl border border-[#d0dce8]">
                    <span className="w-5 h-5 bg-[#f4c400] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                    </span>
                    <span className="text-sm text-[#4a6480]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 bg-[#f4c400]/10 border-l-4 border-[#f4c400] rounded-xl">
                <strong className="block text-[#7a003c] font-extrabold mb-1">Important Note (from 1st January 2021)</strong>
                <p className="text-[#556b6e] text-sm m-0">You can no longer apply for a permanent residence document. If you have received settled status, you must apply for citizenship using that status instead of permanent residence status.</p>
              </div>
            </div>
          </div>

          {/* CTA strip */}
          <div className="bg-gradient-to-br from-[#7a003c] to-[#7a003c] rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Speak to a Legal Expert About British Citizenship</h2>
            <p className="text-white/85 text-lg max-w-2xl mx-auto mb-7 leading-relaxed">
              At MSD Solicitors, we are experts in immigration matters and have supported thousands of satisfied clients.
              Our dedicated team is fully up to date with recent changes to immigration laws.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center min-h-[52px] px-10 py-3 rounded-full font-extrabold bg-[#f4c400] text-[#7a003c] shadow-[0_14px_30px_rgba(244,196,0,0.25)] hover:-translate-y-0.5 transition-all duration-200">
              Book a free consultation
            </Link>
          </div>

        </div>
      </section>

      <ProcessLeadSection
        heading="Which Citizenship Route Applies to You?"
        description="Tell our solicitors about your situation and we will identify the correct route, confirm your eligibility, and advise on the documents you need."
        context="Routes page enquiry"
        bg="slate"
      />
    </div>
  );
}

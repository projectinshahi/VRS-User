import HeroSection from "@/components/sections/HeroSection";
import SecuredProperties from "@/components/sections/SecuredProperties";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import DiscoverVideoSection from "@/components/sections/DiscoverVideoSection";
import TeamSection from "@/components/sections/TeamSection";
import NationwideCoverage from "@/components/sections/NationwideCoverage";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SecuredProperties />
      <DiscoverVideoSection />
      <NationwideCoverage />
      <TeamSection />
      <TestimonialsSection />
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#0f1b2e] to-[#050b1a] border border-yellow-500/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
            <h3 className="text-2xl md:text-4xl text-white font-semibold mb-6">
              Ready to Start Your Investment Journey?
            </h3>

            <p className="text-gray-400 mb-10 text-sm md:text-lg max-w-2xl mx-auto">
              Partner with VRS Real Invest and secure premium real estate
              opportunities today.
            </p>

            <a
              href="https://learn.vrsrealinvest.com.au/web/lite/events/68b9e85ce4cad97bc9d8d657"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-10 py-4 rounded-xl font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

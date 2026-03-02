"use client";

import Image from "next/image";
import { CheckCircle, Shield, Target, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-[#0f172a] to-black text-white">
      {/* ================= HERO / FOUNDER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="w-full">
          <Image
            src="https://tagmango.com/staticassets/-jpg-68-e1d436dafac6deeea15fa1a751be9c62.webp"
            alt="Sudhesh K Valappil - Founder of VRS realinvest"
            width={700}
            height={900}
            className="w-full h-auto rounded-2xl shadow-2xl object-contain"
            priority
          />
        </div>

        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Create Real Freedom with Smart Property Investing
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            At{" "}
            <span className="text-yellow-400 font-semibold">
              VRS RealInvest
            </span>
            , we help busy professionals build wealth through strategic
            Australian real estate investing.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We’re a Buyer’s Agent and Real Estate Coaching team focused on one
            thing: helping you purchase the right investment property with
            clarity, confidence, and a low-risk approach — without wasting
            months researching or making costly mistakes.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Led by{" "}
            <span className="text-white font-semibold">Sudhesh K Valappil</span>
            , we represent you — the buyer — and guide you from strategy to
            settlement.
          </p>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="bg-[#111827] py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "70+", label: "Sold Properties" },
            { number: "50+", label: "Happy Clients" },
            { number: "250+", label: "5-Star Google Reviews" },
            { number: "100+", label: "Free Webinars Conducted" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-yellow-400">
                {stat.number}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= WHO WE HELP ================= */}
      <SectionWrapper title="Who We Help">
        <List
          items={[
            "Busy professionals (medical, IT, engineering, business owners)",
            "First-time investors who want guidance",
            "Home owners building a long-term portfolio",
            "Families seeking passive income and better lifestyle",
          ]}
        />
      </SectionWrapper>

      {/* ================= WHAT WE DO ================= */}
      <SectionWrapper title="What We Do">
        <List
          items={[
            "Strategy session based on your goals & borrowing capacity",
            "Suburb & property research using data and fundamentals",
            "Shortlisting only suitable opportunities",
            "Risk checks, rental demand & growth drivers analysis",
            "Negotiation & contract support",
            "Ongoing guidance for smarter future decisions",
          ]}
        />
      </SectionWrapper>

      {/* ================= OUR APPROACH ================= */}
      <SectionWrapper title="Our Approach (Simple, Practical, Low-Risk)">
        <List
          items={[
            "Low-risk suburbs with strong owner-occupier demand",
            "Strong rental fundamentals & tight vacancy rates",
            "Growth backed by infrastructure & supply-demand data",
            "Strategy-matched properties — not hype-driven picks",
            "Every recommendation explained in plain English",
          ]}
        />
      </SectionWrapper>

      {/* ================= PROMISE ================= */}
      <SectionWrapper title="Our Promise: Trust, Transparency & No Pressure">
        <List
          items={[
            "Honest advice (even if that means telling you to wait)",
            "Clear communication & regular updates",
            "Professional documented processes",
            "Your goals always come first",
          ]}
        />
      </SectionWrapper>

      {/* ================= WHO WE ARE ================= */}
      <SectionWrapper title="Who We Are">
        <p className="text-gray-300 leading-relaxed">
          VRS RealInvest is an Australian buyer’s agency and real estate
          coaching business led by Sudhesh K Valappil. We help busy
          professionals and families build wealth and create passive income
          through smart, low-risk property investment.
        </p>

        <p className="text-gray-300 mt-4 leading-relaxed">
          We’re not selling properties — we represent you, the buyer. Our
          approach is research-backed, numbers-driven, and focused on long-term
          fundamentals like rental demand, vacancy rates, risk checks, and
          growth drivers.
        </p>
      </SectionWrapper>

      {/* ================= MISSION ================= */}
      <SectionWrapper title="Our Mission">
        <p className="text-gray-300 text-lg leading-relaxed text-center">
          To help{" "}
          <span className="text-yellow-400 font-bold">
            10,000 busy professionals{" "}
          </span>
          grow long-term wealth through strategic real estate investments across
          Australia — with clarity, confidence, and a proven process.
        </p>
      </SectionWrapper>

      {/* ================= WHY CHOOSE US ================= */}
      <SectionWrapper title="Why Choose Us">
        <div className="grid md:grid-cols-2 gap-6">
          <Feature icon={<Shield />} title="Trusted & Verified">
            Transparent, compliant, and buyer-focused process.
          </Feature>
          <Feature icon={<Target />} title="Personalised Strategy">
            Tailored to your age, goals, and financial position.
          </Feature>
          <Feature icon={<TrendingUp />} title="High ROI Focus">
            Secure investment-grade assets with long-term performance.
          </Feature>
          <Feature icon={<CheckCircle />} title="10+ Years Experience">
            Proven negotiation skills & market expertise.
          </Feature>
        </div>
      </SectionWrapper>

      {/* ================= CORE VALUES ================= */}
      <SectionWrapper title="Our Core Values">
        <List
          items={[
            "Excellence – High standards in research & service",
            "Integrity – Doing what’s right always",
            "Growth-Focused – Building long-term wealth",
            "Professionalism – Clear process & communication",
          ]}
        />
      </SectionWrapper>

      {/* ================= INVESTMENT PROCESS ================= */}
      <SectionWrapper title="Our Investment Approach">
        <div className="space-y-6">
          {[
            "Understanding Your Requirements",
            "Formalising the Agreement",
            "Budget Confirmation & Loan Pre-Approval",
            "Research & Due Diligence",
            "Suburb Presentation",
            "Property Sourcing",
            "Negotiation & Contract Review",
            "Building & Pest Inspection",
            "Contingency Management",
            "Settlement & Property Handover",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-yellow-400 text-black font-bold w-8 h-8 flex items-center justify-center rounded-full">
                {i + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ================= FINAL CTA ================= */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-[#0f1b2e] to-[#050b1a] border border-yellow-500/20 rounded-3xl p-10 md:p-16 text-center shadow-2xl">
            <h3 className="text-2xl md:text-4xl text-white font-semibold mb-6">
              Ready to Start Your Investment Journey?
            </h3>

            <p className="text-gray-400 mb-10 text-sm md:text-lg max-w-2xl mx-auto">
              Partner with VRS RealInvest and secure premium, data-driven
              property opportunities across Australia with clarity and
              confidence.
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
      </div>
    </section>
  );
}


function SectionWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      {/* Header */}
      <div className="mb-12 max-w-3xl">
        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
          {title}
        </h3>

        {/* Luxury gold divider */}
        <div className="w-20 h-[3px] bg-yellow-400 mt-4 rounded-full" />
      </div>

      {/* Content */}
      <div>{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-300">
          <CheckCircle className="text-yellow-400 mt-1" size={18} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Feature({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#111827] p-6 rounded-xl border border-gray-800 hover:border-yellow-400 transition">
      <div className="text-yellow-400 mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{children}</p>
    </div>
  );
}

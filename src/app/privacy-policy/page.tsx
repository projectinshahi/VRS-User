import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-300">
      
      <Navbar />

      <main className="flex-1 px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto space-y-6">

          <h1 className="text-3xl font-bold text-white">
            Privacy Policy
          </h1>

          <p className="text-sm text-gray-500">
            VRS RealInvest Pty Ltd 
          </p>

          <p className="text-sm leading-relaxed">
            At VRS RealInvest Pty Ltd, we respect your privacy and are committed
            to protecting your personal information.
          </p>

          <Section title="1. Information We Collect">
            <p>We may collect the following personal information:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Property investment goals and preferences</li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>Your information may be used to:</p>
            <ul className="list-disc ml-5 space-y-1">
              <li>Respond to your enquiries</li>
              <li>Provide property investment guidance</li>
              <li>Share updates, offers, and educational content</li>
              <li>Improve our services</li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information">
            <p>
              We do not sell or rent your personal information. Your data may be
              shared with trusted partners only when necessary.
            </p>
          </Section>

          <Section title="4. Data Security">
            <p>
              We take reasonable steps to protect your personal information
              using industry-standard security measures.
            </p>
          </Section>

          <Section title="5. Your Rights">
            <p>
              You may request access, correction, or deletion of your personal
              information at any time.
            </p>
          </Section>

          <Section title="6. Marketing Communication">
            <p>
              By submitting your details, you agree to receive communication via
              phone, email, or messaging platforms including WhatsApp. You can
              opt out anytime.
            </p>
          </Section>

          <Section title="7. Contact Us">
            <p>
              VRS RealInvest Pty Ltd <br />
              Sudhesh Kandankulath Valappil <br />
              Email: sudhesh@vrsrealinvest.com.au <br />
              Phone: +61 412 864 050
            </p>
          </Section>

        </div>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: any) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold text-yellow-500">{title}</h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
}
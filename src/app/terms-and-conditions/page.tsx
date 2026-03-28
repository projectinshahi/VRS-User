import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-300">
      
      <Navbar />

      <main className="flex-1 px-6 pt-28 pb-16">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <h1 className="text-3xl font-bold text-white">
            Terms & Conditions
          </h1>

          <p className="text-sm text-gray-500">
            VRS RealInvest Pty Ltd <br />
            Effective Date: 27 March 2026
          </p>

          <Section title="1. Introduction">
            <p>
              Welcome to VRS RealInvest Pty Ltd ("we", "our", "us"). By accessing
              our website, registering for webinars, purchasing programs, or
              using our services, you agree to be bound by these Terms and
              Conditions.
            </p>
          </Section>

          <Section title="2. Nature of Services (Disclaimer)">
            <p>
              All content, webinars, coaching sessions, and services provided
              are for educational and informational purposes only. We do not
              provide financial, legal, or tax advice. You should seek
              independent advice before making any investment decisions.
            </p>
          </Section>

          <Section title="3. No Guarantees">
            <p>
              We do not guarantee financial outcomes, capital growth, rental
              income, or investment performance. Results vary based on
              individual circumstances and market conditions.
            </p>
          </Section>

          <Section title="4. Client Responsibility">
            <p>
              You acknowledge that you are solely responsible for your financial
              decisions and due diligence. Any property purchase decision is
              made independently by you.
            </p>
          </Section>

          <Section title="5. Services Provided">
            <ul className="list-disc ml-5 space-y-1">
              <li>Educational webinars</li>
              <li>Paid courses and programs</li>
              <li>One-on-one strategy sessions</li>
              <li>Buyer’s Agent services</li>
            </ul>
          </Section>

          <Section title="6. Payments">
            <p>
              All payments must be made in full prior to accessing paid services
              unless otherwise agreed. Prices may change without prior notice.
            </p>
          </Section>

          <Section title="7. Refund Policy">
            <p>
              Due to the nature of digital products, purchases are generally
              non-refundable unless otherwise stated. One-on-one sessions may be
              rescheduled with notice. Buyer’s Agent services are governed by
              separate agreements.
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              All materials including webinars, videos, courses, documents, and
              branding are the intellectual property of VRS RealInvest Pty Ltd
              and may not be copied or distributed without permission.
            </p>
          </Section>

          <Section title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by law, we are not liable for any
              financial loss, investment loss, or damages arising from the use
              of our services.
            </p>
          </Section>

          <Section title="10. Third-Party Services">
            <p>
              We may refer you to third-party professionals such as brokers or
              accountants. We are not responsible for their services or
              outcomes.
            </p>
          </Section>

          <Section title="11. Privacy">
            <p>Your use of our services is also governed by our Privacy Policy.</p>
          </Section>

          <Section title="12. Termination">
            <p>
              We reserve the right to refuse or terminate services if these
              Terms are violated.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              We may update these Terms at any time. Continued use of our
              services indicates acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="14. Governing Law">
            <p>
              These Terms are governed by the laws of New South Wales,
              Australia.
            </p>
          </Section>

          <Section title="15. Contact Us">
            <p>
              VRS RealInvest Pty Ltd <br />
              Email: sudhesh@vrsrealinvest.com.au <br />
              Website: www.vrsrealinvest.com.au
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
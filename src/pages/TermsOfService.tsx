
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 noise-bg"></div>
          <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-lumino-50/50 blur-[120px] rounded-full opacity-60"></div>
          
          <div className="relative container mx-auto container-padding">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Terms of Service
                </h1>
                <p className="text-gray-600 text-lg">
                  Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-4xl mx-auto">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Lumino Strategies' website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>

                <h2>2. Services Description</h2>
                <p>
                  Lumino Strategies provides operational consulting services to businesses seeking to optimize their workflows, reduce inefficiencies, and implement tailored solutions for sustainable growth.
                </p>

                <h2>3. Client Responsibilities</h2>
                <p>
                  Clients are responsible for:
                </p>
                <ul>
                  <li>Providing accurate and complete information</li>
                  <li>Ensuring authorized use of company data shared with Lumino Strategies</li>
                  <li>Timely communication and feedback</li>
                  <li>Implementing recommended solutions as agreed upon</li>
                </ul>

                <h2>4. Intellectual Property</h2>
                <p>
                  All materials, reports, strategies, and deliverables provided by Lumino Strategies remain the intellectual property of Lumino Strategies until full payment is received, after which clients receive a non-exclusive license to use these materials for their business operations.
                </p>

                <h2>5. Confidentiality</h2>
                <p>
                  Lumino Strategies agrees to maintain the confidentiality of all client information and data. We will not disclose confidential information to third parties without explicit permission, except as required by law.
                </p>

                <h2>6. Payment Terms</h2>
                <p>
                  Payment terms will be outlined in individual service agreements. Invoices are typically due within 30 days of receipt unless otherwise specified.
                </p>

                <h2>7. Limitation of Liability</h2>
                <p>
                  Lumino Strategies' liability is limited to the amount paid for our services. We are not liable for any indirect, consequential, or incidental damages arising from the use of our services.
                </p>

                <h2>8. Communication Services</h2>
                <p>
                  If you opt in to receive text messages from Lumino Strategies:
                </p>
                <ul>
                  <li>Message frequency varies by client relationship</li>
                  <li>Message and data rates may apply</li>
                  <li>Reply STOP to any message to opt out</li>
                  <li>Reply HELP for assistance</li>
                  <li>Text messaging is not available in all areas</li>
                </ul>

                <h2>9. Term and Termination</h2>
                <p>
                  Either party may terminate services with written notice according to the terms specified in individual service agreements. Upon termination, clients remain responsible for payment of services rendered.
                </p>

                <h2>10. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by the laws of the state of Massachusetts, without regard to its conflict of law provisions.
                </p>

                <h2>11. Changes to Terms</h2>
                <p>
                  Lumino Strategies reserves the right to modify these terms at any time. Changes will be effective upon posting to our website. Continued use of our services after changes constitutes acceptance of the new terms.
                </p>

                <h2>12. Contact Information</h2>
                <p>
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <p>
                  Email: legal@luminostrategies.com<br />
                  Phone: +1 (555) 123-4567<br />
                  Address: 123 Innovation Drive, Suite 500, Boston, MA 02108
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;

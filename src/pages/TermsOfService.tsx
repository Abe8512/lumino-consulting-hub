
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
                <h2>1. Introduction</h2>
                <p>
                  Welcome to Lumino Strategies. These Terms of Service govern your use of our website and services. By accessing our website or using our services, you agree to these terms.
                </p>

                <h2>2. Services Description</h2>
                <p>
                  Lumino Strategies provides business operations consulting services, including process optimization, operational analysis, technology integration, strategic planning, and supply chain optimization.
                </p>

                <h2>3. Use of Website and Services</h2>
                <p>
                  You agree to use our website and services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
                </p>

                <h2>4. Communications</h2>
                <p>
                  By providing your contact information and opting into communications, you consent to receive emails, calls, or text messages from Lumino Strategies related to our services, appointments, and promotional offers.
                </p>
                <p>
                  For text messages: Message and data rates may apply. Message frequency varies. Reply STOP to opt out or HELP for assistance. By opting in, you agree to receive recurring automated marketing messages at the phone number provided.
                </p>

                <h2>5. Intellectual Property</h2>
                <p>
                  All content on our website, including text, graphics, logos, and software, is the property of Lumino Strategies and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
                </p>

                <h2>6. Privacy</h2>
                <p>
                  Your use of our website and services is also governed by our <a href="/privacy-policy" className="text-lumino-600 hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference.
                </p>

                <h2>7. Limitation of Liability</h2>
                <p>
                  Lumino Strategies is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
                </p>

                <h2>8. Changes to Terms</h2>
                <p>
                  We may revise these Terms at any time. By continuing to use our website or services after changes become effective, you agree to the revised Terms.
                </p>

                <h2>9. Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the State of Massachusetts, without regard to its conflict of law provisions.
                </p>

                <h2>10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
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

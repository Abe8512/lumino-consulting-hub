
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/animations/FadeIn";

const PrivacyPolicy = () => {
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
                  Privacy Policy
                </h1>
                <p className="text-gray-600 text-lg">
                  Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="prose prose-lg max-w-4xl mx-auto">
                <h2>Information We Collect</h2>
                <p>
                  Lumino Strategies collects personal information from you when you use our website or services, including:
                </p>
                <ul>
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Company information</li>
                  <li>Communication preferences</li>
                  <li>Information you provide in forms and messages</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the collected information for purposes including:</p>
                <ul>
                  <li>Providing our consulting services</li>
                  <li>Responding to inquiries and service requests</li>
                  <li>Sending operational and marketing communications (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                </ul>

                <h2>Text Messaging Program</h2>
                <p>
                  If you opt in to receive text messages from Lumino Strategies, we will use your phone number to send you messages about:
                </p>
                <ul>
                  <li>Appointment confirmations and reminders</li>
                  <li>Important updates about your consulting engagement</li>
                  <li>Occasional promotional messages about our services (maximum 4 per month)</li>
                </ul>
                <p>
                  Message and data rates may apply. You can opt out at any time by replying STOP to any message.
                </p>

                <h2>How We Protect Your Information</h2>
                <p>
                  Lumino Strategies implements appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2>Your Rights and Choices</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent for text messaging by replying STOP</li>
                </ul>

                <h2>Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or want to exercise your rights, please contact us at:
                </p>
                <p>
                  Email: privacy@luminostrategies.com<br />
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

export default PrivacyPolicy;

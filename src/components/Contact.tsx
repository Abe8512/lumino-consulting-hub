
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FadeIn } from './animations/FadeIn';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-lumino-50/50 blur-[120px] rounded-full opacity-60"></div>
      
      <div className="relative container mx-auto container-padding">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-lumino-50 text-lumino-700 rounded-full border border-lumino-200 text-sm font-medium">
              Contact Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Transform Your Operations
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to achieve operational excellence? Get in touch with our team of expert consultants today.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn direction="left">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Your company" 
                    className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help you?" 
                    className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    rows={4} 
                    placeholder="Tell us about your operational challenges..." 
                    className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                  />
                </div>
                <Button 
                  className="w-full bg-lumino-600 hover:bg-lumino-700 text-white shadow-sm"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="lg:pl-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Our team of consultants is ready to help you transform your operations and achieve sustainable growth. Reach out to us today to schedule a consultation.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-lumino-50 p-3 rounded-md text-lumino-600 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email Us</h4>
                    <p className="text-gray-600">info@luminostrategies.com</p>
                    <p className="text-gray-600">support@luminostrategies.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-lumino-50 p-3 rounded-md text-lumino-600 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-lumino-50 p-3 rounded-md text-lumino-600 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">123 Innovation Drive, Suite 500</p>
                    <p className="text-gray-600">Boston, MA 02108</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4">Ready for a Transformation?</h4>
                <p className="text-gray-600 mb-4">
                  Schedule a free 30-minute consultation with one of our operational experts.
                </p>
                <Button className="w-full bg-lumino-600 hover:bg-lumino-700 text-white">
                  Book a Consultation
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;

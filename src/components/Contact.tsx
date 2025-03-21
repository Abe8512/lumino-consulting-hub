import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { FadeIn } from './animations/FadeIn';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company name is required." }),
  subject: z.string().min(1, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  smsConsent: z.boolean(),
  emailConsent: z.boolean()
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
      smsConsent: false,
      emailConsent: false
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real application, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', values);
      
      form.reset();
      setIsSuccess(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you shortly.",
        duration: 5000
      });
      
      // Keep success message visible until user takes action
      window.scrollTo({ top: document.getElementById('contact')?.offsetTop || 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookConsultation = () => {
    const nameField = document.getElementById('name');
    if (nameField) {
      nameField.scrollIntoView({ behavior: 'smooth' });
      nameField.focus();
    }
    
    form.setValue('subject', 'Consultation Request');
  };

  const resetForm = () => {
    setIsSuccess(false);
    form.reset();
  };

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
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="bg-green-100 text-green-600 rounded-full p-3 mb-6">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                  <p className="text-gray-600 mb-6 max-w-md">
                    We've received your message and we'll be in touch soon. A member of our team will contact you within 1-2 business days.
                  </p>
                  <Button 
                    onClick={resetForm}
                    className="bg-lumino-600 hover:bg-lumino-700 text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  id="name"
                                  placeholder="Your name" 
                                  className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="your@email.com" 
                                  className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your company" 
                                className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="How can we help you?" 
                                className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                rows={4} 
                                placeholder="Tell us about your operational challenges..." 
                                className="w-full bg-white/70 border-gray-200 focus:border-lumino-500 focus:ring focus:ring-lumino-200 focus:ring-opacity-50 transition-all"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="space-y-4 border-t border-gray-100 pt-4">
                        <h4 className="text-sm font-medium text-gray-700">Communication Preferences</h4>
                        
                        <FormField
                          control={form.control}
                          name="smsConsent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  I agree to receive text messages from Lumino Strategies (up to 4 msgs/month).
                                </FormLabel>
                                <p className="text-xs text-gray-500">
                                  By submitting your phone number, you agree to receive messages from Lumino Strategies. 
                                  Message frequency varies. Message & data rates may apply. Reply STOP to cancel. 
                                  View our <Link to="/privacy-policy" className="text-lumino-600 hover:underline">Privacy Policy</Link>.
                                </p>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="emailConsent"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="text-sm font-normal">
                                  I agree to receive email updates from Lumino Strategies.
                                </FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="text-xs text-gray-500 mb-4">
                        By using this site, you agree to our <Link to="/terms-of-service" className="text-lumino-600 hover:underline">Terms of Service</Link>.
                      </div>

                      <Button 
                        type="submit"
                        className="w-full bg-lumino-600 hover:bg-lumino-700 text-white shadow-sm"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </Form>
                </>
              )}
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
                <Button 
                  className="w-full bg-lumino-600 hover:bg-lumino-700 text-white"
                  onClick={handleBookConsultation}
                >
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

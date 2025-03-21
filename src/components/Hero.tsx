
import { Button } from '@/components/ui/button';
import { FadeIn } from './animations/FadeIn';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 noise-bg"></div>
      <div className="absolute top-0 left-[25%] right-0 h-[500px] bg-gradient-to-br from-lumino-100/70 to-lumino-50/30 blur-[120px] rounded-full opacity-60"></div>
      
      <div className="relative container mx-auto container-padding">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <FadeIn delay={100}>
            <div className="inline-block mb-6 px-4 py-1.5 bg-lumino-50 text-lumino-700 rounded-full border border-lumino-200 text-sm font-medium">
              Operational Excellence for Modern Businesses
            </div>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 text-balance">
              Transform Your Operations with 
              <span className="text-lumino-600"> Strategic Solutions</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 text-balance">
              Lumino Strategies helps businesses optimize workflows, reduce inefficiencies, and implement tailored solutions that drive sustainable growth and operational excellence.
            </p>
          </FadeIn>
          
          <FadeIn delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button size="lg" className="bg-lumino-600 hover:bg-lumino-700 text-white shadow-sm group px-6 py-6">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 py-6">
                Explore Our Services
              </Button>
            </div>
          </FadeIn>
          
          <FadeIn delay={600} className="mt-16 md:mt-24">
            <div className="glass-card rounded-xl p-6 md:p-8 w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-bold text-lumino-700 mb-2">10+</span>
                <span className="text-sm text-gray-600">Years of Experience</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-bold text-lumino-700 mb-2">200+</span>
                <span className="text-sm text-gray-600">Clients Served</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-bold text-lumino-700 mb-2">98%</span>
                <span className="text-sm text-gray-600">Client Retention</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl md:text-4xl font-bold text-lumino-700 mb-2">30%</span>
                <span className="text-sm text-gray-600">Avg. Efficiency Gain</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;

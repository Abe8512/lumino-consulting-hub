
import { Button } from '@/components/ui/button';
import { FadeIn } from './animations/FadeIn';

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 noise-bg"></div>
      
      {/* Background gradient elements */}
      <div className="absolute top-1/3 right-0 h-[400px] w-[400px] bg-lumino-100/50 blur-[120px] rounded-full opacity-60"></div>
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-lumino-50/40 blur-[100px] rounded-full opacity-50"></div>
      
      <div className="relative container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-lumino-600 to-lumino-800 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-90"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-6 rounded-xl max-w-xs shadow-glow hidden md:block">
                <p className="font-medium text-gray-800 mb-1">
                  "Lumino Strategies transformed our operations, increasing efficiency by 35% in just 6 months."
                </p>
                <p className="text-sm text-gray-600">— Sarah Johnson, COO at TechVision</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div>
              <div className="inline-block mb-4 px-4 py-1.5 bg-lumino-50 text-lumino-700 rounded-full border border-lumino-200 text-sm font-medium">
                About Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Operational Excellence is in Our DNA
              </h2>
              <p className="text-gray-700 text-lg mb-6">
                Founded in 2012, Lumino Strategies has been at the forefront of operational consulting, helping businesses transform their processes and achieve sustainable growth.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of expert consultants brings decades of combined experience across multiple industries. We believe in a collaborative approach, working closely with your team to understand your unique challenges and develop tailored solutions that drive real results.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-lumino-700">Our Mission</h3>
                  <p className="text-gray-600">To empower businesses through operational excellence and innovative solutions.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-lumino-700">Our Vision</h3>
                  <p className="text-gray-600">To be the leading operational consulting partner for forward-thinking organizations.</p>
                </div>
              </div>
              
              <Button className="bg-lumino-600 hover:bg-lumino-700 text-white">
                Meet Our Team
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;

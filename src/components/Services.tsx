
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from './animations/FadeIn';
import { BarChart3, Activity, Settings, Briefcase, Network, Search } from "lucide-react";

const services = [
  {
    title: "Process Optimization",
    description: "Streamline your business operations, eliminate waste and improve productivity through strategic process redesign.",
    icon: Activity,
  },
  {
    title: "Operational Analysis",
    description: "Gain insights through comprehensive data analysis to identify bottlenecks and opportunities for improvement.",
    icon: BarChart3,
  },
  {
    title: "Technology Integration",
    description: "Seamlessly implement cutting-edge technologies to enhance operational capabilities and drive efficiency.",
    icon: Settings,
  },
  {
    title: "Strategic Planning",
    description: "Develop robust strategies to align your operations with long-term business goals and market demands.",
    icon: Briefcase,
  },
  {
    title: "Supply Chain Optimization",
    description: "Enhance your supply chain resilience, reduce costs, and improve delivery performance with our expert solutions.",
    icon: Network,
  },
  {
    title: "Performance Auditing",
    description: "Comprehensive assessment of operational performance to identify improvement areas and benchmark against industry standards.",
    icon: Search,
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 noise-bg"></div>
      <div className="relative container mx-auto container-padding">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-lumino-50 text-lumino-700 rounded-full border border-lumino-200 text-sm font-medium">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Expert Solutions for Operational Excellence
            </h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive consulting services designed to transform your business operations and drive sustainable growth.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={100 * (index + 1)}>
              <Card className="glass-card h-full hover:shadow-glow hover:border-lumino-200 transition-all duration-300 group">
                <CardHeader className="pb-2">
                  <div className="mb-5 bg-lumino-50 w-12 h-12 rounded-md flex items-center justify-center text-lumino-600 group-hover:bg-lumino-100 transition-colors duration-300">
                    <service.icon size={24} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-lumino-700 transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

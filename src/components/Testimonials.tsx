
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from './animations/FadeIn';

const testimonials = [
  {
    quote: "Lumino Strategies completely transformed our supply chain operations. Their expertise and data-driven approach helped us reduce costs by 22% while improving delivery times. I can't recommend them enough.",
    author: "Michael Torres",
    title: "VP of Operations, Nexus Manufacturing",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "Working with Lumino Strategies has been a game-changer for our business. Their strategic insights and practical solutions helped us streamline our processes and scale efficiently during a period of rapid growth.",
    author: "Jennifer Chen",
    title: "CEO, Horizon Tech",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face"
  },
  {
    quote: "The team at Lumino Strategies doesn't just provide recommendations; they partner with you to implement real change. Their holistic approach to process optimization has created lasting improvements in our operations.",
    author: "David Washington",
    title: "COO, Verde Sustainability",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 noise-bg"></div>
      
      <div className="relative container mx-auto container-padding">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 bg-lumino-50 text-lumino-700 rounded-full border border-lumino-200 text-sm font-medium">
              Client Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Hear from the businesses we've helped transform through strategic operational solutions.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={100 * (index + 1)}>
              <Card className="glass-card h-full hover:shadow-glow transition-all duration-300">
                <CardContent className="pt-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <svg className="h-8 w-8 text-lumino-500" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-medium text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

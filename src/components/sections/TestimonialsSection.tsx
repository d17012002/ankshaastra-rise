import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Within 3 months of name correction, I got promoted and my business revenue doubled.",
      author: "Priya S.",
    },
    {
      quote: "The mental clarity was instant. I finally feel aligned with my purpose.",
      author: "Amit K.",
    },
    {
      quote: "Skeptical at first, but the results speak for themselves.",
      author: "Rajesh M.",
    },
    {
      quote: "My business relationships improved dramatically after the name alignment.",
      author: "Sunita R.",
    },
    {
      quote: "I was amazed at how quickly things started falling into place after the correction.",
      author: "Vikram P.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-ink-black mb-4">
            Trusted by 5000+ Individuals Who Transformed Their Lives
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-2xl p-8 shadow-card card-hover group relative h-full">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-8">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-purple">
                        <Quote className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    
                    <div className="pt-4">
                      <p className="text-lg text-ink-black leading-relaxed mb-6 italic">
                        "{testimonial.quote}"
                      </p>
                      
                      <p className="text-accent font-semibold">
                        — {testimonial.author}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative static translate-y-0 bg-secondary hover:bg-secondary/80 border-accent/20 text-accent" />
              <CarouselNext className="relative static translate-y-0 bg-secondary hover:bg-secondary/80 border-accent/20 text-accent" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

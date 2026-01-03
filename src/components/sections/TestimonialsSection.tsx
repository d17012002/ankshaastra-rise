import { Quote } from "lucide-react";

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card card-hover group relative"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

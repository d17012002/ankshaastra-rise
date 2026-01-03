import { Button } from "@/components/ui/button";
import { Check, Clock, Lock, Sparkles } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToForm = () => {
    const formSection = document.getElementById("order-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const singleFeatures = [
    "Complete Mulank & Bhagyank Analysis",
    "Current Name Evaluation",
    "2-3 Corrected Name Options",
    "Compatibility Scores",
    "Compound Number Analysis",
    "2 Year Usage Roadmap",
    "PDF Report (50+ Pages)",
  ];

  const familyFeatures = [
    "3 Complete Name Analysis Reports",
    "Perfect for Family Members",
    "All Features Included in Each Report",
    "Mulank & Bhagyank Analysis × 3",
    "Current Name Evaluation × 3",
    "Corrected Name Options × 3",
    "2 Year Roadmap × 3",
    "150+ Pages Total (50+ per person)",
  ];

  return (
    <section className="section-padding bg-card/50" id="pricing" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-lg text-ink-black mb-4">
            Get Your Personalized Report
          </h2>
          <p className="body-md text-muted-foreground">
            One-time investment for lifelong clarity and alignment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Single Report Card */}
          <div className={`bg-card rounded-3xl p-8 shadow-card card-hover relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '150ms' }}>
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-ink-black mb-2">
                Name Correction Blueprint
              </h3>
              <p className="text-muted-foreground">
                Complete numerological analysis and correction
              </p>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-lg text-muted-foreground line-through">₹5,100</span>
                <span className="text-4xl font-heading font-bold text-accent">₹1,997</span>
              </div>
              <span className="inline-block mt-2 bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-full">
                62% OFF
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {singleFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="gold" size="lg" className="w-full group" onClick={scrollToForm}>
              <span className="group-hover:scale-105 transition-transform duration-300 inline-block">Get Single Report</span>
            </Button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 24-48 hr delivery
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4" /> Secure payment
              </span>
            </div>
          </div>

          {/* Family Package Card */}
          <div className={`bg-card rounded-3xl p-8 shadow-card card-hover relative border-2 border-accent gold-glow transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '250ms' }}>
            {/* Best Value Badge */}
            <div className={`absolute -top-4 left-1/2 -translate-x-1/2 transition-all duration-500 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <span className="bg-accent text-accent-foreground text-sm font-bold px-4 py-2 rounded-full shadow-gold">
                BEST VALUE
              </span>
            </div>

            <div className="mb-6 pt-2">
              <h3 className="text-2xl font-heading font-bold text-ink-black mb-2">
                Family Package
              </h3>
              <p className="text-muted-foreground">
                Buy 2 Reports, Get 3rd FREE
              </p>
            </div>

            {/* Family Offer Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold">FAMILY OFFER</span>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-baseline gap-3">
                <span className="text-lg text-muted-foreground line-through">₹15,300</span>
                <span className="text-4xl font-heading font-bold text-accent">₹3,994</span>
              </div>
              <span className="inline-block mt-2 bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                SAVE ₹1,997 + Get 1 FREE
              </span>
            </div>

            {/* Promo Code */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-3 mb-6">
              <p className="text-sm text-center">
                Use Promo Code: <span className="font-bold text-accent">FAMILY</span>
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {familyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button variant="hero" size="lg" className="w-full group" onClick={scrollToForm}>
              <span className="group-hover:scale-105 transition-transform duration-300 inline-block">Get Family Package</span>
            </Button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> 24-48 hr delivery
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-4 h-4" /> Secure payment
              </span>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-2">
              Apply code 'FAMILY' at checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

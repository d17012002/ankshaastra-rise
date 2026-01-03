import { Brain, Shield, TrendingUp, Heart, Activity, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Mental Clarity",
      text: "Experience sharp focus and unshakeable confidence. Make decisions quickly and trust your instincts without second-guessing.",
    },
    {
      icon: Shield,
      title: "Stability",
      text: "Create predictable success patterns. Reduce unexpected setbacks and build sustainable momentum in every area of life.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      text: "Accelerate career advancement and financial prosperity. Attract opportunities that align with your true potential.",
    },
    {
      icon: Heart,
      title: "Relationships",
      text: "Strengthen bonds with loved ones. Improve communication, understanding, and harmony in personal and professional relationships.",
    },
    {
      icon: Activity,
      title: "Health & Vitality",
      text: "Reduce stress-related health issues. Experience improved energy levels and emotional well-being.",
    },
    {
      icon: Star,
      title: "Timing & Opportunities",
      text: "Be in the right place at the right time. Notice synchronicities and 'lucky breaks' becoming the norm.",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2E1A47 0%, #0F0E1A 100%)' }}>
      {/* Mystic Pattern Overlay */}
      <div className="absolute inset-0 mystic-pattern pointer-events-none" />
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg text-accent mb-4">
            Benefits of Name Alignment
          </h2>
          <p className="body-md text-white/80">
            Experience transformative shifts in every area of your life
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card-dark rounded-2xl p-6 card-hover group"
            >
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/30 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-accent transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed text-sm">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

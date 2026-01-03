import { ShieldCheck, Clock, BookOpen, PenTool, User } from "lucide-react";

const TrustSection = () => {
  const trustPoints = [
    {
      icon: ShieldCheck,
      text: "100% Privacy Guaranteed – Your personal details are strictly confidential and never shared",
    },
    {
      icon: Clock,
      text: "Fast Delivery – Report delivered to your email within 24–48 hours",
    },
    {
      icon: BookOpen,
      text: "Authentic Chaldean Numerology – Analysis based purely on traditional Chaldean principles",
    },
    {
      icon: PenTool,
      text: "100% Hand-Crafted Report – No software, no automation, no AI-generated reports",
    },
    {
      icon: User,
      text: "Personally Prepared – Each report is analyzed and created by Himansshu Ji himself",
    },
  ];

  return (
    <section className="section-padding bg-card/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg text-ink-black">
            🔐 Why Trust Ankshaastra?
          </h2>
        </div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-card card-hover flex items-start gap-4 group"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                <point.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

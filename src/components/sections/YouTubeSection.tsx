import { Play } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const YouTubeSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const videos = [
    {
      id: "VIDEO_ID_1",
      title: "Name Correction Success Stories"
    },
    {
      id: "VIDEO_ID_2", 
      title: "How Numerology Works"
    },
    {
      id: "VIDEO_ID_3",
      title: "Understanding Your Mulank & Bhagyank"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2E1A47 0%, #0F0E1A 100%)' }} ref={ref}>
      {/* Mystic Pattern Overlay */}
      <div className="absolute inset-0 mystic-pattern pointer-events-none" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-10 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
        <div className={`absolute bottom-10 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30 mb-6">
              <Play className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">Watch & Learn</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent mb-4">
              Explore Our Videos
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Discover the power of numerology and name correction through our insightful videos
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div 
                key={index}
                className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 border border-accent/30 gold-glow group hover:border-accent/50 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Golden Corner Accents */}
                <div className={`absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent/50 rounded-tl-2xl transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${300 + index * 100}ms` }} />
                <div className={`absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/50 rounded-br-2xl transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${400 + index * 100}ms` }} />
                
                {/* Video Embed */}
                <div className="aspect-video rounded-xl overflow-hidden bg-black/50 mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Video Title */}
                <h3 className="text-white font-semibold text-center group-hover:text-accent transition-colors duration-300">
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;

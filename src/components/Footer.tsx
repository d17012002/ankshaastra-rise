import { Sparkles, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-2xl font-heading font-bold text-white">
              Ankshaastra
            </span>
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center gap-2 text-accent mb-8">
            <Phone className="w-5 h-5" />
            <span className="text-lg font-medium">For Queries: 9667305577</span>
          </div>

          {/* Disclaimer */}
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            This analysis is based on traditional numerology principles and is intended 
            for guidance purposes only. Individual results may vary based on personal 
            implementation and life circumstances.
          </p>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © 2025 Ankshaastra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

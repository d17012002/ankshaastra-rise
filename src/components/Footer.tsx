import { Sparkles, Phone } from "lucide-react";
import privacyPolicy from "@/assets/PrivacyPolicy.pdf";
import refundPolicy from "@/assets/RefundPolicy.pdf";
import shippingPolicy from "@/assets/ShippingPolicy.pdf";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            {/* Logo */}
            <img 
                src={logo} 
                alt="Ankshaastra Logo"
                className="h-12 w-auto object-contain"
              />
          </div>

          {/* Contact */}
          <div className="flex items-center justify-center gap-2 text-accent mb-8">
            <Phone className="w-5 h-5" />
            <span className="text-lg font-medium">For Queries: 9667305577</span>
          </div>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
            <a 
              href={privacyPolicy}
              download
              className="text-white/70 hover:text-accent transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href={refundPolicy} 
              download
              className="text-white/70 hover:text-accent transition-colors text-sm"
            >
              Refund Policy
            </a>
            <a 
              href={shippingPolicy}
              download
              className="text-white/70 hover:text-accent transition-colors text-sm"
            >
              Shipping Policy
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            This analysis is based on traditional numerology principles and is intended 
            for guidance purposes only. Individual results may vary based on personal 
            implementation and life circumstances.
          </p>

          {/* Copyright */}
          <p className="text-white/40 text-sm">
            © 2026 Ankshaastra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

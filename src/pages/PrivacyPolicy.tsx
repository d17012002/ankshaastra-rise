import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-ink-black mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-body-text space-y-6">
              <p className="text-lg">
                At Ankshaastra, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy outlines 
                how we collect, use, and safeguard your data.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Information We Collect
              </h2>
              <p>
                We collect the following information when you use our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full Name (as per official documents)</li>
                <li>Date of Birth</li>
                <li>Mobile Number</li>
                <li>Email Address</li>
                <li>Payment Information (processed securely through our payment partners)</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p>
                Your personal information is used exclusively for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Creating your personalized numerology report</li>
                <li>Communicating with you regarding your order</li>
                <li>Delivering your report via email</li>
                <li>Providing customer support</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Data Security
              </h2>
              <p>
                We implement strict security measures to protect your personal information. 
                Your data is encrypted and stored securely. We never share, sell, or rent 
                your personal information to third parties for marketing purposes.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary to 
                provide our services and fulfill the purposes outlined in this policy. 
                You may request deletion of your data at any time by contacting us.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise 
                your data rights, please contact us at:
              </p>
              <p className="text-accent font-semibold">
                Phone: 9667305577
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-ink-black mb-8">Shipping & Delivery Policy</h1>
            
            <div className="prose prose-lg max-w-none text-body-text space-y-6">
              <p className="text-lg">
                At Ankshaastra, we deliver our numerology reports digitally via email. 
                Here's everything you need to know about our delivery process.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Digital Delivery
              </h2>
              <p>
                All our numerology reports are delivered digitally as PDF documents 
                to the email address you provide during checkout. There is no physical 
                shipping involved.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Delivery Timeline
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Standard Delivery:</strong> 24-48 hours after successful payment</li>
                <li><strong>Family Package:</strong> 24-48 hours for all three reports</li>
              </ul>
              <p>
                Each report is personally analyzed and prepared by Himansshu Ji, 
                ensuring accuracy and quality. This personalized approach requires 
                adequate time for thorough analysis.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Report Format
              </h2>
              <p>
                Your personalized numerology report will be delivered as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>High-quality PDF document (50+ pages)</li>
                <li>Optimized for both screen viewing and printing</li>
                <li>Includes detailed analysis, charts, and recommendations</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Delivery Confirmation
              </h2>
              <p>
                Once your report is ready, you will receive an email with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your complete numerology report as a PDF attachment</li>
                <li>Instructions on how to access and use your report</li>
                <li>Contact information for any follow-up questions</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Didn't Receive Your Report?
              </h2>
              <p>
                If you haven't received your report within 48 hours:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Check your spam/junk folder</li>
                <li>Verify the email address provided during checkout</li>
                <li>Contact us immediately for assistance</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                For delivery inquiries or support, please contact us:
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

export default ShippingPolicy;

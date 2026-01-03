import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading-lg text-ink-black mb-8">Refund Policy</h1>
            
            <div className="prose prose-lg max-w-none text-body-text space-y-6">
              <p className="text-lg">
                At Ankshaastra, we strive to provide the highest quality numerology 
                reports and customer satisfaction. Please read our refund policy carefully.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Digital Product Nature
              </h2>
              <p>
                Our numerology reports are personalized digital products created 
                specifically for each individual based on their unique birth details 
                and name. Each report is hand-crafted by Himansshu Ji himself and 
                involves significant time and expertise.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Refund Eligibility
              </h2>
              <p>
                Due to the personalized nature of our reports, refunds are generally 
                not available once the report preparation has begun. However, we may 
                consider refunds in the following cases:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Request made within 24 hours of payment, before report preparation begins</li>
                <li>Technical issues preventing report delivery (we will resolve or refund)</li>
                <li>Duplicate payments made by error</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Report Corrections
              </h2>
              <p>
                If you find any errors in your report due to incorrect information 
                provided during the order, we will happily provide corrections at no 
                additional cost. Please contact us within 7 days of receiving your report.
              </p>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                How to Request a Refund
              </h2>
              <p>
                To request a refund, please contact us with your order details:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your full name</li>
                <li>Order date</li>
                <li>Email used for the order</li>
                <li>Reason for refund request</li>
              </ul>

              <h2 className="text-2xl font-heading font-bold text-ink-black mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                For refund inquiries or any concerns, please reach out to us:
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

export default RefundPolicy;

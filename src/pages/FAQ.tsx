import React from 'react';
import { Plus, Minus } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "How does the free replacement vehicle service work?",
      answer: "Our free replacement vehicle service is available to anyone involved in a non-fault accident. We work directly with insurance companies to provide you with a replacement vehicle at zero cost while your car is being repaired."
    },
    {
      question: "What documents do I need to get a replacement vehicle?",
      answer: "You'll need your driver's license, insurance details, and accident report (if available). Our team will guide you through the process and help collect any additional required documentation."
    },
    {
      question: "How long can I keep the replacement vehicle?",
      answer: "You can keep the replacement vehicle for the entire duration of your car's repair period. We ensure you have continuous mobility until your vehicle is ready to be collected."
    },
    {
      question: "What types of vehicles are available?",
      answer: "We offer a wide range of vehicles from economy cars to luxury vehicles and SUVs. We aim to provide a replacement vehicle that matches or is similar to your own vehicle."
    },
    {
      question: "Is insurance included with the replacement vehicle?",
      answer: "Yes, comprehensive insurance coverage is included with all our replacement vehicles at no additional cost to you."
    },
    {
      question: "How quickly can I get a replacement vehicle?",
      answer: "In most cases, we can provide a replacement vehicle within 24 hours of your accident. Emergency services are available 24/7."
    },
    {
      question: "Do you deliver the replacement vehicle?",
      answer: "Yes, we offer free delivery and collection of replacement vehicles to your preferred location, whether that's your home, workplace, or the repair center."
    },
    {
      question: "What happens if I'm not at fault but the other party is uninsured?",
      answer: "We can still help. Our team works with various insurance schemes and can provide solutions even in cases involving uninsured drivers."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-36">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our accident replacement vehicle service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to help answer any questions you may have.
          </p>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
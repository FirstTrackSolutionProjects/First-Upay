import React, { useState } from "react";

const Support = () => {
  const faqs = [
    {
      q: "How do I register my UPI ID?",
      a: "You can register your UPI ID easily through our app by navigating to the 'Payments' section, choosing 'Add UPI ID,' and following 3 simple steps."
    },
    {
      q: "Is my money safe?",
      a: "Yes, absolutely. We use bank-level security, two-factor authentication, and advanced encryption to keep your transactions safe and secure."
    },
    {
      q: "Can I link multiple bank accounts?",
      a: "Yes, you can link up to 5 bank accounts with a single UPI ID and choose your preferred default account for transactions."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700">
        Customer Support & FAQs
      </h1>
      <p className="text-gray-600 text-center mb-10">
        Have questions? We’ve got answers. Explore the most commonly asked queries below.
      </p>

      {/* FAQ Section */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm hover:shadow-md transition bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-lg text-gray-800">
                {faq.q}
              </span>
              <span className="text-indigo-600 font-bold text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-600">{faq.a}</div>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          Still need help?
        </h2>
        <p className="text-gray-600 mb-4">
          Reach out to our support team, and we’ll assist you right away.
        </p>
        <p className="text-indigo-700 font-medium">
          Email:{" "}
          <a
            href="mailto:support@example.com"
            className="text-indigo-600 hover:underline"
          >
            support@firstupay.com
          </a>
          <br />
           Phone:{" "}
          <a
            href="tel:+919876543210"
            className="text-indigo-600 hover:underline"
          >
            +91-1234567890
          </a>
        </p>
      </div>
    </div>
  );
};

export default Support;

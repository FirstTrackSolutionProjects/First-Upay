import React from "react";

const Support = () => {
  const faqs = [
    { q: "How do I register my UPI ID?", a: "You can register your UPI ID through our app in 3 simple steps." },
    { q: "Is my money safe?", a: "Yes, we use bank-level security and encryption to protect your transactions." },
    { q: "Can I link multiple bank accounts?", a: "Yes, you can link up to 5 bank accounts with one UPI ID." },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Support</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="font-semibold">{faq.q}</h2>
            <p className="text-gray-700 mt-2">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Support;

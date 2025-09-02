import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading Section */}
      <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

      {/* Image and Intro */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/images/about.jpg"
          alt="About Us"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
        <div>
          <p className="text-gray-700 leading-relaxed mb-4 text-lg">
            Welcome to our platform! We are your trusted partner for all
            financial and utility services — from mobile recharges, bill
            payments, FASTag recharges, to personal and business loans. Our goal
            is to simplify digital transactions and make them accessible to
            everyone across India.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            With secure technology and customer-first values, we ensure fast,
            reliable, and seamless experiences every time you use our services.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Our mission is to empower individuals and businesses by providing
          hassle-free financial solutions. We aim to bridge the gap between
          people and digital finance, ensuring that technology works for
          everyone.
        </p>
      </div>

      {/* Vision Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We envision a future where every person can manage payments, loans,
          and financial tasks instantly with just a few clicks — no queues, no
          paperwork, just simple and smart solutions.
        </p>
      </div>

      {/* Core Values */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>💡 Innovation – Bringing new and easy-to-use solutions.</li>
          <li>🤝 Trust – Building long-term relationships with our customers.</li>
          <li>⚡ Speed – Fast and reliable transactions, always.</li>
          <li>🔒 Security – Your data and money are always safe with us.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;

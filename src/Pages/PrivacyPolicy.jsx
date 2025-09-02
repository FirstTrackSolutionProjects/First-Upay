import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed text-lg mb-4">
        We respect your privacy and are committed to protecting your personal
        data. This Privacy Policy explains how we collect, use, and safeguard
        the information you provide when using our services.
      </p>

      {/* Information Collection */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Personal details like name, email, and phone number.</li>
          <li>Payment information for processing transactions securely.</li>
          <li>Device and usage data to improve our services.</li>
          <li>Any documents you upload for loan or verification purposes.</li>
        </ul>
      </div>

      {/* Usage of Data */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">How We Use Your Data</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Your information is used only for service delivery and to provide a
          better customer experience:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg mt-2">
          <li>To process payments and complete your transactions.</li>
          <li>To improve user experience and personalize services.</li>
          <li>To provide customer support and respond to queries.</li>
          <li>To comply with legal and regulatory requirements.</li>
        </ul>
      </div>

      {/* Security */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We use strong encryption and advanced security measures to protect
          your data from unauthorized access, misuse, or disclosure.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

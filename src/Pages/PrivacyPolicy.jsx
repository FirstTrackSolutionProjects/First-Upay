import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
        Privacy Policy
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10 leading-relaxed">
        Your privacy is important to us. This Privacy Policy outlines how we
        collect, use, and safeguard your information when you use our website,
        mobile application, and services. Please read this policy carefully to
        understand our views and practices regarding your data.
      </p>

      {/* Information Collection */}
      <div className="mt-10 border-l-4 border-indigo-500 pl-4">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Personal details (name, email, phone number, address).</li>
          <li>Payment and billing details for transactions.</li>
          <li>Identity verification documents (if required).</li>
          <li>Device, browser, and usage data (IP address, cookies).</li>
          <li>Location data (only with your consent).</li>
        </ul>
      </div>

      {/* How We Use Data */}
      <div className="mt-10 border-l-4 border-green-500 pl-4">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Data</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We process your personal data responsibly for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg mt-2">
          <li>To process transactions securely and provide requested services.</li>
          <li>To personalize your experience and show relevant content.</li>
          <li>To send updates, promotional offers, and service notifications.</li>
          <li>To improve website performance and detect technical issues.</li>
          <li>To comply with applicable laws and legal obligations.</li>
        </ul>
      </div>

      {/* Sharing of Data */}
      <div className="mt-10 border-l-4 border-pink-500 pl-4">
        <h2 className="text-2xl font-semibold mb-3">3. Sharing of Information</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We do not sell or rent your personal information. However, we may share
          data with:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg mt-2">
          <li>Trusted third-party service providers (payment gateways, hosting).</li>
          <li>Regulatory authorities, if legally required.</li>
          <li>Business partners in case of mergers or acquisitions.</li>
        </ul>
      </div>

      {/* Security */}
      <div className="mt-10 border-l-4 border-yellow-500 pl-4">
        <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We implement strict security practices including SSL encryption,
          firewalls, and secure servers to protect your personal information.
          While we strive for complete security, no online platform can guarantee
          100% safety. We continuously monitor and upgrade our security systems.
        </p>
      </div>

      {/* Cookies */}
      <div className="mt-10 border-l-4 border-blue-500 pl-4">
        <h2 className="text-2xl font-semibold mb-3">5. Cookies & Tracking</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We use cookies and similar technologies to improve your browsing
          experience, analyze traffic, and understand user behavior. You may
          disable cookies in your browser settings, but some features of our
          services may not work properly without them.
        </p>
      </div>

      {/* Your Rights */}
      <div className="mt-10 border-l-4 border-purple-500 pl-4">
        <h2 className="text-2xl font-semibold mb-3">6. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Right to access your personal data.</li>
          <li>Right to request corrections or updates.</li>
          <li>Right to request deletion of your data.</li>
          <li>Right to opt-out of marketing communications.</li>
        </ul>
      </div>

      {/* Policy Updates */}
      <div className="mt-10 border-l-4 border-red-500 pl-4">
        <h2 className="text-2xl font-semibold mb-3">7. Changes to This Policy</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with the revised date. Please review it
          periodically to stay informed.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-10 border-l-4 border-gray-600 pl-4">
        <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          If you have any questions about this Privacy Policy or our practices,
          please contact us at:  
          <br />
          <span className="font-medium text-indigo-600">
            support@firstupay.com
          </span>
        </p>
      </div>

     
    </div>
  );
};

export default PrivacyPolicy;

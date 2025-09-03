import React from "react";

const Terms = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
        Terms & Conditions
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed text-lg mb-4 text-center">
        By accessing and using our platform, you agree to comply with the terms
        and conditions outlined below. These terms govern your relationship with
        us, and we encourage you to review them carefully before continuing to
        use our services.
      </p>

      {/* Section 1: General Use */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          1. General Use
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>
            Users must provide accurate, complete, and up-to-date information
            during registration or transactions.
          </li>
          <li>
            Services are intended strictly for lawful purposes; fraudulent,
            abusive, or harmful activity is strictly prohibited.
          </li>
          <li>
            We reserve the right to suspend or terminate accounts found violating
            our policies or engaging in suspicious activities.
          </li>
          <li>
            By using our platform, you confirm that you are at least 18 years of
            age or have legal consent from a guardian.
          </li>
        </ul>
      </div>

      {/* Section 2: Payments & Services */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          2. Payments & Services
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-3">
          All payments made through our platform are processed securely using
          trusted payment gateways. By initiating a payment, you agree to the
          following:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>
            Payments once initiated cannot be reversed, except where expressly
            mentioned in our refund policy.
          </li>
          <li>
            We are not liable for delays or failures caused by banks,
            third-party providers, or technical issues beyond our control.
          </li>
          <li>
            Additional fees, such as taxes or processing charges, may apply and
            will be displayed before you confirm your payment.
          </li>
          <li>
            Users are responsible for ensuring sufficient account balance or
            valid payment method before initiating transactions.
          </li>
        </ul>
      </div>

      {/* Section 3: User Responsibilities */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          3. User Responsibilities
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-3">
          To maintain a safe and secure platform, users agree to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Keep login credentials confidential and never share them.</li>
          <li>
            Immediately notify us in case of unauthorized access or suspicious
            account activity.
          </li>
          <li>
            Avoid uploading harmful content, malware, or misleading information.
          </li>
          <li>
            Respect intellectual property rights and avoid infringing content.
          </li>
        </ul>
      </div>

      {/* Section 4: Limitation of Liability */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          4. Limitation of Liability
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          While we strive to provide seamless and secure services, we are not
          responsible for any direct, indirect, or consequential damages
          resulting from:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg mt-2">
          <li>Technical failures, network downtime, or server errors.</li>
          <li>
            Delays or losses caused by third-party service providers, banks, or
            payment gateways.
          </li>
          <li>User mistakes such as entering incorrect details.</li>
          <li>Events beyond our reasonable control (force majeure).</li>
        </ul>
      </div>

      {/* Section 5: Changes to Terms */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          5. Changes to Terms
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We reserve the right to update or modify these terms at any time.
          Updated terms will be posted on this page, and continued use of our
          services implies acceptance of the revised terms.
        </p>
      </div>

      {/* Section 6: Contact */}
      <div className="mt-10 mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          6. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          If you have any questions or concerns regarding these Terms &
          Conditions, you can reach us at:
        </p>
        <p className="text-indigo-700 font-medium mt-2">
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

export default Terms;

import React from "react";

const Terms = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed text-lg mb-4">
        By accessing and using our platform, you agree to comply with the terms
        and conditions outlined below. Please read them carefully before using
        our services.
      </p>

      {/* General Use */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">General Use</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>Users must provide accurate and up-to-date information.</li>
          <li>
            Services are intended for lawful use only; fraudulent activity is
            strictly prohibited.
          </li>
          <li>
            We reserve the right to suspend accounts found violating policies.
          </li>
        </ul>
      </div>

      {/* Payments */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Payments & Services</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Once a payment is initiated, it cannot be reversed unless otherwise
          specified. We ensure secure transactions but are not liable for delays
          caused by banks or third-party networks.
        </p>
      </div>

      {/* Liability */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          We are not responsible for any losses due to technical errors, network
          issues, or user negligence. Users are advised to verify details before
          proceeding with transactions.
        </p>
      </div>
    </div>
  );
};

export default Terms;

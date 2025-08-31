import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700 mb-3">
        We value your privacy and are committed to protecting your personal
        information. This policy outlines how we handle your data.
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>We only collect information necessary to provide our services.</li>
        <li>Your personal data will never be sold or misused.</li>
        <li>
          Transactions are processed using secure, encrypted technologies.
        </li>
        <li>
          You can request data deletion anytime by contacting our support team.
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;

import React from "react";

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms of Use</h1>
      <p className="text-gray-700 mb-3">
        By accessing and using our platform, you agree to comply with the
        following terms:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Users must provide valid and accurate details for all transactions.</li>
        <li>
          We are not responsible for failed transactions due to incorrect
          information provided by users.
        </li>
        <li>Service availability may vary depending on third-party providers.</li>
        <li>
          We reserve the right to update or modify these terms at any time
          without prior notice.
        </li>
      </ul>
    </div>
  );
};

export default Terms;

import React from "react";

const RefundCancellation = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Refund & Cancellation Policy
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed text-lg mb-4">
        We strive to ensure complete satisfaction for all our customers. Our
        refund and cancellation policy is designed to be transparent and
        customer-friendly.
      </p>

      {/* Refund Policy */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Refund Policy</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>
            Recharges once successful cannot be cancelled or refunded.
          </li>
          <li>
            If a recharge fails and money is deducted, refund will be processed
            within 5–7 working days.
          </li>
          <li>
            In case of duplicate transactions, the excess amount will be
            refunded.
          </li>
        </ul>
      </div>

      {/* Cancellation Policy */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Cancellation Policy</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Loan applications or service requests once submitted cannot be
          cancelled. For special cases, customers can contact support for
          assistance.
        </p>
      </div>
    </div>
  );
};

export default RefundCancellation;

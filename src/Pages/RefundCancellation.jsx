import React from "react";

const RefundCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Refund & Cancellation Policy</h1>
      <p className="text-gray-700 mb-3">
        We aim to ensure smooth and reliable transactions. However, refunds and
        cancellations will be handled under the following guidelines:
      </p>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          Refunds are only applicable in cases of failed or incomplete
          transactions.
        </li>
        <li>
          Successfully completed transactions cannot be cancelled or refunded.
        </li>
        <li>
          Refunds (if applicable) will be processed within 5–7 business days to
          the original payment method.
        </li>
        <li>
          Service charges, if any, are non-refundable under all circumstances.
        </li>
      </ul>
    </div>
  );
};

export default RefundCancellation;

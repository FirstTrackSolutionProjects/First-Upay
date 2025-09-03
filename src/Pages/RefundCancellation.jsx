import React from "react";

const RefundCancellation = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
        Refund & Cancellation Policy
      </h1>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed text-lg mb-4 text-center">
        We strive to provide our customers with a smooth and transparent
        experience. This Refund & Cancellation Policy explains the conditions
        under which refunds may be issued or cancellations may be accepted.
      </p>

      {/* Refund Policy */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          1. Refund Policy
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-3">
          Refunds are processed fairly and transparently. The following rules
          apply to refund requests:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>
            <span className="font-medium">Successful Transactions:</span>{" "}
            Recharges or payments once successful cannot be cancelled or
            refunded.
          </li>
          <li>
            <span className="font-medium">Failed Transactions:</span> If a
            recharge fails but the amount is deducted from your account, the
            refund will be initiated automatically within <b>5–7 working days</b>.
          </li>
          <li>
            <span className="font-medium">Duplicate Payments:</span> In case of
            duplicate transactions, the extra amount will be refunded back to
            the original payment method.
          </li>
          <li>
            <span className="font-medium">Refund Timeline:</span> Refund
            timelines may vary depending on your bank, card issuer, or payment
            wallet provider.
          </li>
        </ul>
      </div>

      {/* Cancellation Policy */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          2. Cancellation Policy
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-3">
          Our services are designed to process transactions instantly, hence
          cancellations are generally not possible once a request is submitted.
          Please note:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>
            <span className="font-medium">Recharge Services:</span> Recharges or
            bill payments once submitted cannot be cancelled.
          </li>
          <li>
            <span className="font-medium">Loan Applications:</span> Loan or
            service applications once submitted cannot be cancelled. However,
            you may choose not to proceed with further documentation or
            disbursement.
          </li>
          <li>
            <span className="font-medium">Exceptional Cases:</span> In rare
            situations, customers may contact support for assistance, and
            requests will be handled on a case-by-case basis.
          </li>
        </ul>
      </div>

      {/* Support */}
      <div className="mt-10 mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">
          3. Customer Support
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          If you face any issues related to refunds or cancellations, please
          reach out to our support team with transaction details. We are here to
          help resolve your concerns as quickly as possible.
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

export default RefundCancellation;

import React from "react";

const Offers = () => (
  <section className="bg-gray-100 py-16 px-6">
    <h3 className="text-2xl font-bold text-center mb-10">Exciting Offers</h3>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow hover:shadow-lg"
        >
          <h4 className="text-lg font-semibold text-purple-700">
            Cashback Offer {i}
          </h4>
          <p className="text-gray-500 mt-2">
            Get flat ₹50 cashback on your next transaction.
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Offers;

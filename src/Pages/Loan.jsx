import React from "react";

const loans = [
  {
    id: 1,
    title: "Personal Loan",
    desc: "Quick personal loans for your urgent needs with minimal documentation.",
    link: "https://fts.firsttracksolutiontechnologies.com/loan/apply/personal",
    readMore: "https://fts.firsttracksolutiontechnologies.com/loan-details/personal",
  },
  {
    id: 2,
    title: "Business Loan",
    desc: "Grow your business with instant capital and easy repayment options.",
     link: "https://fts.firsttracksolutiontechnologies.com/loan/apply/business",
    readMore: "https://fts.firsttracksolutiontechnologies.com/loan-details/business",
  },
];

const Loan = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center m-4">
        <img
          src="/images/loan.jpg"
          alt="Loan Illustration"
          className="w-full h-80 object-cover"
        />
      </div>

      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Loan Services</h2>
          <p className="text-gray-600 mt-4">
            Choose from a variety of loan options that best fit your needs. Fast
            approvals, minimal paperwork, and flexible repayment plans.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {loans.map((loan) => (
            <div
              key={loan.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-purple-700">
                {loan.title}
              </h3>
              <p className="text-gray-500 mt-2">{loan.desc}</p>

              <div className="mt-4 flex gap-3">
                <a
                  href={loan.readMore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
                >
                  Read More
                </a>
                <a
                  href={loan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Loan;

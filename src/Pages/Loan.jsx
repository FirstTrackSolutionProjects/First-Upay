import React from "react";
import { Link } from "react-router-dom";

const loans = [
  {
    id: 1,
    title: "Personal Loan",
    desc: "Quick personal loans for your urgent needs with minimal documentation.",
    link: "/loan/personal",
  },
  {
    id: 2,
    title: "Home Loan",
    desc: "Make your dream home a reality with affordable EMIs and flexible tenure.",
    link: "/loan/home",
  },
  {
    id: 3,
    title: "Business Loan",
    desc: "Grow your business with instant capital and easy repayment options.",
    link: "/loan/business",
  },
  {
    id: 4,
    title: "Education Loan",
    desc: "Finance your studies with student-friendly education loan plans.",
    link: "/loan/education",
  },
  {
    id: 5,
    title: "Car Loan",
    desc: "Buy your dream car with low interest and flexible repayment options.",
    link: "/loan/car",
  },
];

const Loan = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Our Loan Services</h2>
        <p className="text-gray-600 mt-4">
          Choose from a variety of loan options that best fit your needs. Fast approvals, 
          minimal paperwork, and flexible repayment plans.
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
              <Link
                to={loan.link}
                className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
              >
                Read More
              </Link>
              <Link
                to={`${loan.link}/apply`}
                className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Apply Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loan;

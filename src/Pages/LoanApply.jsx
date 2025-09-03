import React from "react";
import { useLocation } from "react-router-dom";

// Import all form components
import PersonalLoanForm from "../Pages/PersonalLoan";
import BusinessLoanForm from "../Pages/BusinessLoan";


// Loan type to component map
const formComponents = {
  personal: PersonalLoanForm,
  business: BusinessLoanForm,

  
};

const LoanApply = () => {
  const location = useLocation();
  const loanType = location.state?.loanType?.toLowerCase() || "personal";

  const FormComponent = formComponents[loanType];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
        {loanType.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())} Loan Application
      </h2>

      {FormComponent ? (
        <FormComponent />
      ) : (
        <p className="text-center text-red-600">No form available for this loan type.</p>
      )}
    </div>
  );
};

export default LoanApply;
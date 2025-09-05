// import React from "react";

// import HeroSection from "../Components/HeroSection";
// import FinanceDashboard from "../Components/FinanceDashboard";
// import Testimonial from "../Components/Testimonial";
// import UtilityServices from "../Components/UtilityServices";
// import Transaction from "../Components/Transaction";

// const Explore = () => {
//   return (
//     <>
  
//       <HeroSection />

//         <section className="bg-gradient-to-r from-teal-100 to-emerald-200 py-12 mt-5  w-full px-0">
//         <FinanceDashboard />
//         </section>

//       <section className="bg-gradient-to-r from-yellow-100 to-orange-200 py-12 mt-5  w-full px-0">
//         <UtilityServices />
//       </section>

    
//       <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12 mt-5 w-full px-0">
//         <Testimonial />
//       </section>

    
//       <section className="bg-gradient-to-r from-sky-50 to-blue-100 py-12 mt-5  w-full px-0">
//         <Transaction />
//       </section>
//     </>
//   );
// };

// export default Explore;
import React from 'react'
import HeroSection from '../Components/HeroSection'
import FinanceDashboard from '../Components/FinanceDashboard'
import UtilityServices from '../Components/UtilityServices'

const Explore = () => {
  return (
    <>
      <HeroSection />
      <section className="bg-gradient-to-r from-teal-100 to-emerald-200 py-12 mt-5  w-full px-0">
        <FinanceDashboard />
      </section>
      <section className="bg-gradient-to-r from-yellow-100 to-orange-200 py-12 mt-5  w-full px-0">
        <UtilityServices />
      </section>

    </>
  )
}

export default Explore
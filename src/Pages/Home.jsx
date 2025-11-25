import React from 'react'
import HeroSection from '../Components/HeroSection'
import DownloadApp from '../Components/DownloadApp'
import Services from '../Components/Services'
// import Offers from '../Components/Offers'
import Features from '../Components/Features'
import Travel from '../Components/Travel'
import Finance from '../Components/Finance'
import UtilityServices from '../Components/UtilityServices'
import Testimonial from '../Components/Testimonial'
import Transaction from '../Components/Transaction'
const Home = () => {
   return (
    <>
      <HeroSection />

      <section className="bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 py-12 mt-5">
        <DownloadApp />
      </section>

      <section className="bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 py-12 mt-5">
        <Services />
      </section>

      <section className="bg-gradient-to-r from-indigo-100 to-cyan-200 py-12 mt-5">
        <Features />
      </section>

      <section className="bg-gradient-to-r from-purple-100 to-pink-200 py-12 mt-5">
        <Travel />
      </section>

     {/* Example Finance Section with teal/emerald gradient */}
      <section className="bg-gradient-to-r from-teal-100 to-emerald-200 py-12 mt-5">
        <Finance />
      </section>

      {/* Example Utility Services Section with orange/yellow gradient */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-200 py-12 mt-5">
        <UtilityServices />
      </section>

      {/* Testimonial Section with gray/neutral gradient */}
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 py-12 mt-5">
        <Testimonial />
      </section>

      {/* Transaction Section with sky blue gradient */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-100 py-12 mt-5">
        <Transaction />
      </section>
    </>
  );
}
export default Home;
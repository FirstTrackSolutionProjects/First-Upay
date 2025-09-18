import React from 'react'
import BannerSection from '../Components/BannerSection'
import FinanceDashboard from '../Components/FinanceDashboard'
import ManagePayment from '../Components/ManagePayment'
import PromoBanner from '../Components/PromoBanner'


const Explore = () => {
  return (
    <>
      <BannerSection />
      <section className="bg-gradient-to-r from-teal-100 to-emerald-200 py-12 mt-5  w-full px-0">
        <FinanceDashboard />
      </section>
      <section className="bg-gradient-to-r from-yellow-100 to-orange-200 py-12 w-full px-0 mt-5">
        <ManagePayment />
      </section>
      <section className="bg-gradient-to-r from-blue-100 to-purple-200 py-12 w-full px-0 mt-5">
        <PromoBanner />
      </section>

      

    </>
  )
}

export default Explore
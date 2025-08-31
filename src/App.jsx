import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import SideBar from "./Components/SideBar"
import Home from "./Pages/Home"
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Payment from "./Pages/Payment";
import Recharge from "./Pages/Recharge";
import DthRecharge from "./Pages/DthRecharge";
import ElectricityBill from "./Pages/ElectricityBill";
import FasTag from "./Pages/FasTag";
import Reward from "./Pages/Reward";
import Bill from "./Pages/Bill";
import Bus from "./Pages/Bus";
import Train from "./Pages/Train";
import Flight from "./Pages/Flight";
import Hotel from "./Pages/Hotel";
import Loan from "./Pages/Loan";
import GoldLoan from "./Pages/GoldLoan";
import Insurance from "./Pages/Insurance";
import EMICalculator from "./Pages/EMICalculator";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import RefundCancellation from "./Pages/RefundCancellation";
import Support from "./Pages/Support";
import Footer from "./Components/Footer"



function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-40">
    <NavBar toggleSideBar={toggleSideBar} />
    </div>
     <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />

      <main className="min-h-[80vh] px-6 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/dth-recharge" element={<DthRecharge />} />
          <Route path="/electricity-bill" element={<ElectricityBill />} />
          <Route path="/fastag" element={<FasTag />} />
          <Route path="/bills" element={<Bill />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/train" element={<Train />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/gold-loan" element={<GoldLoan />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/rewards" element={<Reward />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<RefundCancellation />} />
          <Route path="/support" element={<Support />} />
 

          

          </Routes>
      </main>
      <Footer/>

      
    </>
  )
}

export default App

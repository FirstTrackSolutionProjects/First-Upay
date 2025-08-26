import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import SideBar from "./Components/SideBar"
import Home from "./Pages/Home"
import Payment from "./Pages/Payment";
import Recharge from "./Pages/Recharge";
import Reward from "./Pages/Reward";
import Bill from "./Pages/Bill";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Support from "./Pages/Support";
import Footer from "./Components/Footer"



function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
    <NavBar toggleSideBar={toggleSideBar} />
        <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />

      <main className="min-h-[80vh] px-6">
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/recharges" element={<Recharge />} />
          <Route path="/bills" element={<Bill />} />
          <Route path="/rewards" element={<Reward />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/support" element={<Support />} />
 

          

          </Routes>
      </main>
      <Footer/>

      
    </>
  )
}

export default App

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"
import SideBar from "./Components/SideBar"
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
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
import Cashback from "./Pages/Cashback";
import RentalCar from "./Pages/RentalCar";
import Loan from "./Pages/Loan";
import LoanDetails from "./Pages/LoanDetails";
import LoanApply from "./Pages/LoanApply";
import PersonalLoan from "./Pages/PersonalLoan";
import BusinessLoan from "./Pages/BusinessLoan";
import GoldLoan from "./Pages/GoldLoan";
// import GoldSip from "./Pages/GoldSip";
import Insurance from "./Pages/Insurance";
import VehicleInsurance from "./Pages/VehicleInsurance";
import HealthInsurance from "./Pages/HealthInsurance";
import TermInsurance from "./Pages/TermInsurance";
import AccidentalInsurance from "./Pages/AccidentalInsurance";
import EMICalculator from "./Pages/EMICalculator";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Terms from "./Pages/Terms";
import RefundCancellation from "./Pages/RefundCancellation";
import Support from "./Pages/Support";
import BankTransfer from "./Pages/BankTransfer";
import UpiTransfer from "./Pages/UpiTransfer";
import Fee from "./Pages/Fee";
import ReferandEarn from "./Pages/ReferandEarn";
import InvestGold from "./Pages/InvestGold";
import TravelPage from "./Pages/TravelPage";
import SavingSection from "./Pages/SavingSection";
import SmartSaving from "./Pages/SmartSaving";
import InstantLoan from "./Pages/InstantLoan";
import MutualFunds from "./Pages/MutualFunds";
import BestSip from "./Pages/BestSip";
import FundsDetail from "./Pages/FundsDetail";
import Wallet from "./Pages/Wallet";
import UpiQuickpay from "./Pages/UpiQuickpay";
import RuPayUpi from "./Pages/RupayUpi";
import CreditCard from "./Pages/CreditCard";
import SendMoney from "./Pages/SendMoney";
import NewPayment from "./Pages/NewPayment"
import SelfAccount from "./Pages/SelfAccount";
import IFSC from "./Pages/IFSC";
import Bank from "./Pages/Bank";
import CheckBalance from "./Pages/CheckBalance";
import ScanandPay from "./Pages/ScanandPay";
import ReceiveMoney from "./Pages/ReceiveMoney";
import PayRent from "./Pages/PayRent";
import LoanRepayment from "./Pages/LoanRepayment";
import Entertainment from "./Pages/Entertainment";
import BookCylinder from "./Pages/BookCylinder";
import BharatGasBooking from "./Pages/BharatGasBooking";
import BharatGasCommercialBooking from "./Pages/BharatGasCommercialBooking";
import Broadband from "./Pages/Broadband";
import PipedGas from "./Pages/PipedGas";
import Water from "./Pages/Water";
import MunicipalTax from "./Pages/MunicipalTax";
import NPS from "./Pages/NPS";
import Trading from "./Pages/Trading"
import CibilScore from "./Pages/CibilScore"
import PNR from "./Pages/PNR";
import Shopping from "./Pages/Shopping";
import HelpSupport from "./Pages/HelpSupport"
import Footer from "./Components/Footer"




function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

    const noFooterPages = ["/explore"];

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-40">
    <NavBar toggleSideBar={toggleSideBar} />
    </div>
     <SideBar isOpen={isSideBarOpen} toggleSideBar={toggleSideBar} />

      <main className="min-h-[80vh] pt-16 px-4 md:px-8">
         <div className="max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/bank" element={<BankTransfer />} />
          <Route path="/upi" element={<UpiTransfer />} />
          <Route path="/fees" element={<Fee />} />
          <Route path="/refer" element={<ReferandEarn />} />
          <Route path="/invest-gold" element={<InvestGold />} />
          <Route path="/dth-recharge" element={<DthRecharge />} />
          <Route path="/electricity-bill" element={<ElectricityBill />} />
          <Route path="/fastag" element={<FasTag />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/shop" element={<Shopping />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/bus" element={<Bus />} />
          <Route path="/train" element={<Train />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/cashback" element={<Cashback />} />
          <Route path="/rental-car" element={<RentalCar />} />
          <Route path="/loan" element={<Loan />} />
          <Route path="/loan/apply" element={<LoanApply />} />
          <Route path="/loan-details/:loanType" element={<LoanDetails />} />
          <Route path="/loan/apply/personal" element={<PersonalLoan />} />
          <Route path="/loan/apply/business" element={<BusinessLoan />} />
          <Route path="/instant-loan" element={<InstantLoan />} />
          <Route path="/saving" element={<SavingSection />} />
          <Route path="/smart-savings" element={<SmartSaving />} />
          <Route path="/mutual-funds" element={<MutualFunds />} />
          <Route path="/sip-funds" element={<BestSip />} />
          <Route path="/funds/:id" element={<FundsDetail />} />
          <Route path="/gold-loan" element={<GoldLoan />} />
          {/* <Route path="/gold-sip" element={<GoldSip />} /> */}
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/insurance/vehicle" element={<VehicleInsurance />} />
          <Route path="/insurance/health" element={<HealthInsurance />} />
          <Route path="/insurance/term" element={<TermInsurance />} />
          <Route path="/insurance/accidental" element={<AccidentalInsurance />} />
          <Route path="/emi-calculator" element={<EMICalculator />} />
          <Route path="/rewards" element={<Reward />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/upi-lite" element={<UpiQuickpay />} />
          <Route path="/rupay-upi" element={<RuPayUpi />} />
          <Route path="/credit-card" element={<CreditCard />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/new-payment" element={<NewPayment />} />
          <Route path="/self-account" element={<SelfAccount />} />
          <Route path="/ifsc" element={<IFSC />} />

            {/* ✅ Bank page with mode */}
            <Route path="/add-bank" element={<Bank mode="self" />} />
            <Route path="/receiver-bank" element={<Bank mode="receiver" />} />

          <Route path="/balance" element={<CheckBalance />} />
          <Route path="/scan" element={<ScanandPay />} />
          <Route path="/receive" element={<ReceiveMoney />} />
          <Route path="/rent" element={<PayRent />} />
          <Route path="/repayment" element={<LoanRepayment />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/Book-cylinder" element={<BookCylinder />} />
          <Route path="/book/:provider" element={<BharatGasBooking />} />
          <Route path="/book/commercial" element={<BharatGasCommercialBooking />} />
          <Route path="/broadband" element={<Broadband />} />
          <Route path="/piped-gas" element={<PipedGas />} />
          <Route path="/water" element={<Water />} />
          <Route path="/municipal-tax" element={<MunicipalTax />} />
          <Route path="/nps" element={<NPS />} />
          <Route path="/trading" element={<Trading />} />
          <Route path ="/cibil" element={<CibilScore />} />
          <Route path ="/pnr" element={<PNR />} />
          <Route path ="/explore/help" element={<HelpSupport />} />

          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<RefundCancellation />} />
          <Route path="/support" element={<Support />} />
 

          

          </Routes>
          </div>
      </main>

      {!noFooterPages.includes(window.location.pathname) &&
      <Footer/>
      }

      
    </>
  )
}

export default App

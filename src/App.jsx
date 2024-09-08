import './App.css'
import './Animations.css'
import Header2 from "./Shared/Header2/Header2.jsx"
import Header1 from "./Shared/Header1/Header1.jsx"
import HomePage from './Pages/HomePage/HomePage.jsx'
import { Route, Routes } from 'react-router-dom';
import AboutUsPage from './Pages/AboutUs/AboutUsPage.jsx';
import HomeLoanPage from './Pages/HomeLoan/HomeLoanPage.jsx';
import PreFooter from './Shared/PreFooter/PreFooter.jsx';
import Footer from './Shared/Footer/Footer.jsx';
import FirstHomeBuyerPage from './Pages/FirstHomeBuyer/FirstHomeBuyerPage.jsx';
import RefinancingPage from './Pages/Refinancing/RefinancingPage.jsx';
import CommercialLoanPage from './Pages/CommercialLoan/CommercialLoanPage.jsx';
import AssetFinancePage from './Pages/AssetFinance/AssetFinancePage.jsx';
import PersonalLoanPage from './Pages/PersonalLoan/PersonalLoanPage.jsx';
import SelfManagedSuperFundPage from './Pages/SelfManagedSuperFund/SelfManagedSuperFundPage.jsx';
import FAQsPage from './Pages/Faqs/FaqsPage.jsx';

function App() {

  return (
    <div className="">
      <Header1 />
      <Header2 />
      <div id='StartOfMainPage'></div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/home-loan' element={<HomeLoanPage />} />
        <Route path='/first-home-buyer' element={<FirstHomeBuyerPage />} />
        <Route path='/Refinancing' element={<RefinancingPage />} />
        <Route path='/commercial-loan' element={<CommercialLoanPage />} />
        <Route path='/asset-finance' element={<AssetFinancePage />} />
        <Route path='/personal-loan' element={<PersonalLoanPage />} />
        <Route path='/self-managed-super-fund' element={<SelfManagedSuperFundPage />} />
        <Route path='/faqs' element={<FAQsPage />} />
      </Routes>


      <PreFooter />
      <Footer />
    </div>
  )
}

export default App

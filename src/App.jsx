import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import EditPage from './pages/EditPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import TopSearchBar from './components/TopSearchBar'
import GroupTour from './pages/GroupTour'
import PersonalTour from './pages/PersonalTour'
import Logout from './pages/Logout'
import Footer from './components/Footer'
import TermsCondition from './pages/TermsCondition'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'

import AdminLayout from './pages/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import ManageUsers from './pages/admin/ManageUsers'
import ManageBookings from './pages/admin/ManageBookings'
import ManageTours from './pages/admin/ManageTours'
import MyBookings from './pages/MyBookings'


const App = () => {
  return (
    <>

    <style>

 {`
 
 html, body {
  height: 100%;
  margin: 0;
}

.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
}
 
 
 
 `}




    </style>
      <ToastContainer />

      <Router>

  <Routes>

    {/* ================= USER ROUTES ================= */}
    <Route
      path="/*"
      element={
        <div className="page-wrapper">
          <TopSearchBar />
          <Navbar />

          <div className="page-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/grouptour" element={<GroupTour />} />
              <Route path="/personaltour" element={<PersonalTour />} />
              <Route path="/registerpage" element={<RegisterPage />} />
              <Route path="/loginpage" element={<LoginPage />} />
              
              <Route path="/edit/:id" element={<EditPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/terms-condition" element={<TermsCondition />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/refund-policy" element={<RefundPolicy />} />
              <Route path="/my-bookings" element={<MyBookings />} />
            </Routes>
          </div>

          <Footer />
        </div>
      }
    />

    {/* ================= ADMIN ROUTES ================= */}
    <Route path="/admin/*" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="users" element={<ManageUsers />} />
      <Route path="bookings" element={<ManageBookings />} />
      <Route path="tours" element={<ManageTours />} />
    </Route>

  </Routes>

</Router>
    </>
  )
}

export default App

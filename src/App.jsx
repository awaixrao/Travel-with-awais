
import './App.css'
import Home from './pages/home'
import Login from './pages/login'


import { Route, Routes } from "react-router-dom";
import SignUp from './pages/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Foot';
import TourDetail from './pages/Tourdetail';
import ToursPage from './pages/tours';
import AboutUs from './pages/Aboutsus';
import ContactUs from './pages/contact';


function App() {

  return (
    <>

    <Navbar/>
  <Routes>

<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/tour/:id" element={<TourDetail />} />
<Route path="/tours" element={<ToursPage />} />
<Route path="/about" element={<AboutUs />} />
<Route path="/contact" element={<ContactUs />} />








</Routes>
<Footer/>
     </>
  )
}

export default App

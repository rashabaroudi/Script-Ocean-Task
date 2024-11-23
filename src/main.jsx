import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
    <App />
    {/* <Footer/> */}
    </BrowserRouter>
)

/* eslint-disable no-unused-vars */

import './App.css'
import { Banner } from './components/Banner/Banner'
import { Category } from './components/Category/Category'
import { Category2 } from './components/Category/Category2'
import { Hero } from './components/Hero/Hero'
import { NavBar } from './components/NavBar/NavBar'
import { Services } from './components/Services/Services'
import headphone from './assets/hero/headphone.png'
import smartWatch2 from './assets/category/smartwatch2-removebg-preview.png'
import { Products } from './components/Products/Products'
import { Blogs } from './components/Blogs/Blogs'
import { Partners } from './components/Partners/Partners'
import { Footer } from './components/Footer/Footer'
import { Popup } from './components/Popup/Popup'
import { useEffect, useState } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% de Descuento",
  title: "Buena Sonrisa",
  date: "Del 10 al 31 de Marzo",
  image: headphone,
  title2:"Air Solo Bass",
  title3: "Venta de Primavera",
  title4: "Audifonos Wireless Ultra High Definition",
  bgColor:"#f42c37"

}

const BannerData2 = {
  discount: "30% de Descuento",
  title: "Felices Horas ",
  date: "Del 10 al 20 de Marzo",
  image: smartWatch2,
  title2:"Air Solo Bass",
  title3: "Venta de Primavera",
  title4: "Smart Watch",
  bgColor:"#2dcc6f"

}

function App() {

  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    )

    AOS.refresh();
    
  },[])
  
  
  return (
    <div className='bg-white dark:bg-gray-800 dark:text-white duration-200 overflow-hidden'>
      <NavBar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App

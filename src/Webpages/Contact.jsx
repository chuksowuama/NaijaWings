import React from 'react'
import Navbar from '../Components/Navigation/Navbar'
import Herosect from '../Components/Herosection/Herosect'
import ContactImg from "../assets/binadullah mosque.jpg"
import Footer from '../Components/FooterComponent/Footer'
import ConatactInfo from '../ContactInfo/ConatactInfo'
import ScrollTop from '../Scrolltotop/ScrollTop'
const Contact = () => {
  return (
   <div>
    <Navbar/>
   <Herosect
   herocontainer="OtherContainer"
   heroImage={ContactImg}
   heroTitle="CONTACT"
   />
   <ScrollTop/>
   <ConatactInfo/>
   <Footer/>
   </div>
  )
}

export default Contact

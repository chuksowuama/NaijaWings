import React from 'react'
import Navbar from '../Components/Navigation/Navbar'
import Herosect from '../Components/Herosection/Herosect'
import ContactImg from "../assets/nike-art-centre.jpg"
import Footer from '../Components/FooterComponent/Footer'
import ConatactInfo from '../ContactInfo/ConatactInfo'
const Contact = () => {
  return (
   <div>
    <Navbar/>
   <Herosect
   herocontainer="OtherContainer"
   heroImage={ContactImg}
   heroTitle="CONTACT"
   />
   <ConatactInfo/>
   <Footer/>
   </div>
  )
}

export default Contact

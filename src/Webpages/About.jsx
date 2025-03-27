import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import Herosect from "../Components/Herosection/Herosect";
import AboutImg from "../assets/pexels-alee-abdullahi-dc__shot-2148582901-30799116.jpg";
import Footer from "../Components/FooterComponent/Footer";
import AboutInfo from "../AboutInformation/AboutInfo";
import ScrollTop from "../Scrolltotop/ScrollTop";


const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <Herosect
          herocontainer="OtherContainer"
          heroImage={AboutImg}
          heroTitle="About"
        />
        <ScrollTop/>
        <AboutInfo />
        <Footer />
      </div>
    </>
  );
};

export default About;

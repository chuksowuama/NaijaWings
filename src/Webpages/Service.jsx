import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import Herosect from "../Components/Herosection/Herosect";
import serveImg from "../assets/Kajuru Castle.jpg"
import Serveinfo from "../ServiceInformation/Serveinfo";
import Footer from "../Components/FooterComponent/Footer";

const Service = () => {
  return (
    <>
      <div>
        <Navbar />
        <Herosect
          herocontainer="OtherContainer"
          heroImage={serveImg}
          heroTitle="SERVICES"
        />
        <Serveinfo/>
        <Footer/>
      </div>
    </>
  );
};

export default Service;

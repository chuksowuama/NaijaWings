import React from "react";
import Navbar from "../Components/Navigation/Navbar";
import Herosect from "../Components/Herosection/Herosect";
import Asorock from "../assets/pexels-akoonie-21715785.jpg"
import Destination from "../Components/Destination/Destination";
import Trip from "../Components/RecentTrip/Trip";
import Footer from "../Components/FooterComponent/Footer";
import Homeinfo from "../Homeinformation/Homeinfo";
import ScrollTop from "../Scrolltotop/ScrollTop";
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Herosect
        herocontainer="MainHeroContainer "
          heroImage={Asorock}
          heroTitle="Explore Nigeria"
          heroParagraph="Experience the warmth and beauty of Nigeria. from the bustling
            streets of lagos to the serene landscape of the savanah,we'll take
            you on a journey you'll never forget"
          heroButton="heroButton"
          heroLink="/"
          heroLinktext="Travel Plan"
        />
        <ScrollTop/>
        <Homeinfo/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import CardsData from "../Components/CardsFolder/CardsData";
import locimg1 from "../assets/Lagos state.jpg";
import locimg2 from "../assets/Abuja image.jpeg";
import locimg3 from "../assets/Calaba state.jpg";
import locimg4 from "../assets/Osun-State.jpg";
import Trip from "../Components/RecentTrip/Trip";
import Testimonial from "../Components/TestimonialComponent/Testimonial"
import "./Homeinfo.css";

const Homeinfo = () => {
  return (
    <>
      <div className="maincont">
        <h1>Popular Places</h1>
        <div className="placeContainer">
          <CardsData
            CardsContainer="Cards"
            cardImageContainer="cardImageContainer"
            CardsImg={locimg1}
            CardimgClass="CardimgClas"
            CardsTitle="Lagos"
            CardParagraph="Explore the vibrant city of Lagos, from the National Museum to the beautiful beaches. Visit the iconic Eko Hotel and Suites, and take a stroll along the Bar Beach shoreline.
             Discover the rich cultural heritage of Lagos at the National Museum, which features a collection of Nigerian art and artifacts. Enjoy the city's vibrant nightlife, with a variety of bars,
              clubs, and live music venues to choose from."
          />
          <CardsData
            CardsContainer="Cards"
            cardImageContainer="cardImageContainer"
            CardsImg={locimg2}
            CardimgClass="CardimgClas"
            CardsTitle="Abuja"
            CardParagraph="Discover the capital city's landmarks, such as the National Assembly and the Zuma Rock. Visit the National Mosque and the Ecumenical Centre,
             two of Abuja's most iconic religious landmarks.
             Explore the Nigerian National Museum, which features a collection of artifacts and exhibits on Nigerian history and culture.
             Take a stroll through the beautiful Jabi Lake, and enjoy the city's modern amenities and infrastructure."
          />
          <CardsData
            CardsContainer="Cards"
            cardImageContainer="cardImageContainer"
            CardsImg={locimg3}
            CardimgClass="CardimgClas"
            CardsTitle="Cross River"
            CardParagraph="Experience the rich cultural heritage of Calabar,
             from the Calabar Carnival to the Tinapa Resort. Visit the Calabar Museum,
              which features a collection of artifacts and exhibits on the history and culture of the Cross River region. Explore the beautiful Tinapa Resort,
               which offers stunning views of the Calabar River and a range of recreational activities. Enjoy the city's vibrant cultural scene,
             with a variety of festivals and events throughout the year."
          />
          <CardsData
            CardsContainer="Cards"
            cardImageContainer="cardImageContainer"
            CardsImg={locimg4}
            CardimgClass="CardimgClas"
            CardsTitle="Osun State"
            CardParagraph="Visit the ancient Osun Osogbo Sacred Grove, a UNESCO World Heritage Site.
             Explore the Osun Osogbo Temple, which is dedicated to the goddess of fertility and is one of the most important cultural sites in Nigeria.
              Visit the Osun State Museum, which features a collection of artifacts and exhibits on the history and culture of the Osun region. Enjoy the natural beauty of the surrounding countryside,
               with a range of hiking and trekking opportunities available.
"
          />
        </div>
        <div>
          <h1 className=" triph header">Most Frequented Trips</h1>
        <Trip/>
        </div>
        <div className="Testimonial">
          <h1 className="testimonial header">Dont just take our words for it</h1>
           <Testimonial/>
        </div>
      </div>
    </>
  );
};

export default Homeinfo;

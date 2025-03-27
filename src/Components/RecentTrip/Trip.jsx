import React from "react";
import "./Trip.css";
import img1 from "../../assets/tripCardImg1.jpg";
import img2 from "../../assets/tripimg2.jpg";
import img3 from "../../assets/nike-art-centre.jpg";
import TripData from "./TripData"

const Trip = () => {
  return (
    <>
      <div className="TContainer">
        <div className="cardsContainer">
          <TripData
            TripContainer="TripContainer"
            tripCardclass="tripcard"
            ImgContainerClass="ImgContainerClass"
            tripimg={img1}
            imgClass="img"
            cardtextContainer="cardtextContainer"
            tripLocation="Lekki Conservation Centre"
            tripDescription="Located in the middle of Lagos, this conservation center
             is home to abundant plants and wildlife and plays a vital role in preserving the region’s
             ecosystem. Sign up for a guided tour with transportation included,or you can just as easily 
             hail a rideshare and make your own way there"
          />
          <TripData
            TripContainer="TripContainer"
            tripCardclass="tripcard"
            ImgContainerClass="ImgContainerClass"
            tripimg={img2}
            imgClass="img"
            cardtextContainer="cardtextContainer"
            tripLocation="Agodi Gardens"
            tripDescription="This green oasis of peace in Ibadan draws locals and travelers to its many attractions.
             Here, you can spot turtles, monkeys and peacocks at the Agodi Zoo, have a blast at the water park,
             stroll through the beautifully landscaped woods, go on a horse ride, and have a leisurely picnic on the lush lawn"
          />
          <TripData
            TripContainer="TripContainer"
            tripCardclass="tripcard"
            ImgContainerClass="ImgContainerClass"
            tripimg={img3}
            imgClass="img"
            cardtextContainer="cardtextContainer"
            tripLocation=""
            tripDescription="Nike Art Centre, Lagos, is one of Nigeria's hidden treasures. Located in Lekki, Lagos, 
            the four-story building compromises of an art gallery and textile museum featuring over 7,000 pieces and soon to have Coffee shop.
             The Centre has a diverse collection of art by a multitude of artists, celebrating Nigeria's talent"
             />
        </div>
      </div>
    </>
  );
};

export default Trip;

import React from "react";
import "./Destination.css";
import DestinationData from "./DestinationData";
import img1 from "../../assets/Kajuru Castle.jpg";
import img2 from "../../assets/KajuruCastlejpg.jpg";
import img3 from "../../assets/osun-osogbo-sacred-grove.jpg";
import img4 from "../../assets/the-osun-river.jpg";

const Destination = () => {
  return (
    <>
      <div className="DContainer">
        <h1>POPULAR DESTINATION</h1>
        <p>Discover the most sought after destination</p>
        <DestinationData
          contentContainer="contentContainer"
          destTextClass="destText"
          header="Kajuru Castle"
          subheadclass="subhead"
          subheader="A Medieval Marvel in Kaduna"
          paragraphText="Kajuru Castle is a medieval-style castle located in Kajuru,
           Kaduna State, Nigeria. Built in 1989 by a German engineer, Gerhard Huebner, 
           the castle features a unique blend of European and African architectural styles.
            It serves as a tourist attraction, offering stunning views, luxurious accommodations,
             and a range of recreational activities.
             Kajuru Castle is a unique and fascinating destination that offers something for everyone.
              Whether you're interested in history, culture, adventure, or simply relaxing in a beautiful setting,
               the castle is a must-visit destination in Nigeria. With its rich cultural heritage, 
             stunning architecture, and range of amenities and activities, Kajuru Castle is a true gem of Nigerian tourism.
             "
          destImgClass="destImg"
          image1={img1}
          image2={img2}
          imageClass="image"
        />

        <DestinationData
          contentContainer="contentContainer two"
          destTextClass="destText reverse"
          header="Osun-Osogbo Sacred Grove"
           subheader=" A Sacred Oasis in Nigeria"
          paragraphText="
          The Osun-Osogbo Sacred Grove is a UNESCO World Heritage Site located in Osogbo,
           Osun State, Nigeria. This sacred grove is a remarkable example of Nigeria's rich
            cultural heritage and a testament to the enduring traditions of the Yoruba people.
              The Osun-Osogbo Sacred Grove is a remarkable cultural and spiritual site that offers a glimpse into the rich heritage of the Yoruba people.
               This sacred oasis is a testament to the enduring traditions and customs of Nigeria's indigenous cultures.
             "
          destImgClass="destImg reverse"
          image1={img3}
          image2={img4}
          imageClass="image"
        />
      </div>
    </>
  );
};

export default Destination;

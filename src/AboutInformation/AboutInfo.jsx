import React from "react";
import Title from "../Components/TITLE/Title";
import "./Aboutinfo.css";
import CardsData from "../Components/CardsFolder/CardsData";
import ourTeam1 from "../assets/Ourteam.jpg";
import ourTeam2 from "../assets/Ourteam2.jpg";
import ourTeam3 from "../assets/ourteam3.jpg";
import ourTeam4 from "../assets/our team4.jpg";

const AboutInfo = () => {
  return (
    <>
      <div className="AboutContainer">
        <div className="History">
          <p>
            Welcome to NaijaWings, your premier travel partner for unforgettable
            journeys around Nigeria. With a passion for exploration and a
            commitment to excellence, we craft unique travel experiences that
            bring people and places together. our company has grown from a small
            team of travel enthusiasts to a National network of experts
            dedicated to delivering exceptional travel experiences. Our mission
            is to inspire a sense of wonder and curiosity in our travelers,
            while promoting cultural understanding and responsible tourism
            practices.
          </p>
        </div>

        <div className="ourMission">
          <h1>Our Mission</h1>
          <h3>At NaijaWings,</h3>
          <p>
            Our mission is to inspire a sense of wonder and curiosity in our
            travelers, while promoting cultural understanding and responsible
            tourism practices. We believe that travel has the power to transform
            lives and communities, and we're dedicated to making a positive
            impact on the places we visit. we're also committed to:
          </p>
          <ul>
            <li>-Providing exceptional customer service and support</li>
            <li>-Offering unique and authentic travel experiences</li>
            <li>
              -Supporting local communities and promoting sustainable tourism
            </li>
            <li>-Ensuring the safety and well-being of our travelers</li>
          </ul>
        </div>
        <div className="Values">
          <h1>VALUES</h1>
          <h3>
            At NaijaWings, we're guided by a set of core values that shape our
            approach to travel and our relationships with our travelers,
            partners, and the communities we visit:
          </h3>
          <ul>
            <li>
              - Passion: We're passionate about travel and dedicated to sharing
              that passion with our travelers.
            </li>
            <li>
              - Excellence: We strive for excellence in every aspect of our
              business, from trip planning to execution.
            </li>
            <li>
              - Sustainability: We're committed to responsible tourism practices
              that promote environmental conservation and cultural heritage
              preservation.
            </li>
            <li>
              - Community: We believe in building meaningful connections between
              our travelers and the communities we visit.
            </li>
          </ul>
        </div>

        <div className="OurTeam">
          <Title
            titleContainer="titleContainer"
            Headerclass="Headerclas"
            HeaderText="Our Team"
          />
          <h3 className="teamtext">
            Our team of experienced travel professionals is dedicated to
            providing exceptional service and support to our travelers. From our
            expert tour guides to our knowledgeable customer support team, we're
            passionate about delivering unforgettable travel experiences
          </h3>
          <div className="Teamcards">
            <CardsData
              CardsContainer="CardsContain"
              cardImageContainer="cardImageContainer"
              CardsImg={ourTeam1}
              CardimgClass="CardimgClass"
              CardsTitle="MR Martins Owuama"
              CardParagraph="Founder and CEO"
            />
            <CardsData
              CardsContainer="CardsContain"
              cardImageContainer="cardImageContainer"
              CardsImg={ourTeam2}
              CardimgClass="CardimgClass"
              CardsTitle="Mrs andrea"
              CardParagraph="Operations Manager"
            />
            <CardsData
              CardsContainer="CardsContain"
              cardImageContainer="cardImageContainer"
              CardsImg={ourTeam3}
              CardimgClass="CardimgClass"
              CardsTitle="CardsTitle"
              CardParagraph="Destination Specialist"
            />
            <CardsData
              CardsContainer="CardsContain"
              cardImageContainer="cardImageContainer"
              CardsImg={ourTeam4}
              CardimgClass="CardimgClass"
              CardsTitle="CardsTitle"
              CardParagraph="Customer Support Specialist"
            />
          </div>
        </div>

        <div className="Ourdestination">
          <h1>DESTINATIONS</h1>
          <h3>
            We offer a wide range of travel destinations and experiences, from
            adventure-filled journeys to relaxing getaways. Our destinations
            include:
          </h3>
          <ul>
            <li>
              - Osun Osogbo Sacred Grove: A UNESCO World Heritage Site and
              sacred Yoruba landmark - Kajuru Castle: A medieval-style castle in
              Kaduna State, perfect for adventure seekers{" "}
            </li>
            <li>
              - Yankari Game Reserve: A wildlife reserve in Bauchi State, home
              to elephants, lions, and more
            </li>
            <li>
              - Olumo Rock: A historic rock formation in Abeokuta, Ogun State,
              offering breathtaking views
            </li>
          </ul>
        </div>

        <div className="Ourtours">
          <h1>Our Tours</h1>
          <h3>
            We offer a variety of tour types and styles to suit different
            interests and preferences, including:
          </h3>
          <ul>
            <li>
              - Guided Tours: Join a small group of travelers on a guided tour,
              led by an expert tour guide.
            </li>
            <li>
              - Private Tours: Create a customized private tour with your own
              guide and itinerary.
            </li>
            <li>
              - Adventure Tours: Go on an adventure-filled journey, with
              activities such as hiking, biking, or kayaking.
            </li>
            <li>
              - Relaxation Tours: Unwind and relax on a leisurely tour, with
              plenty of free time to enjoy your surroundings.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutInfo;

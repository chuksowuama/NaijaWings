import React from "react";
import "./serveinfo.css";
import Carousel from "../Components/Carousel/Carousel";
import img1 from "../assets/masquerade.jpg";
import img2 from "../assets/FancyHotel.jpg";
import img3 from "../assets/flight.jpg";
import img4 from "../assets/Hikers2.jpg";
import DestinationData from "../Components/Destination/DestinationData";
import CardsData from "../Components/CardsFolder/CardsData";
import Testimonial from "../Components/TestimonialComponent/Testimonial";
import testimg1 from "../assets/testimonial1.jpg";
import testimg2 from "../assets/testimonial2.jpg";
import testimg3 from "../assets/testimonial3.jpg";
import testimg4 from "../assets/testimonial4.jpg";
import testimg5 from "../assets/testimonial5.jpg";

const Serveinfo = () => {
  return (
    <>
      <div className="Servicecontainer">
        <div className="PopularLoactions">
          <h1 className="header">POPULAR LOCATIONS</h1>
          <Carousel />
        </div>
        <div className="Tourpackages">
        
          <DestinationData
            contentContainer="ServicecontentContainer one"
            destTextClass="destText"
            header="Tour Packages"
            subheadclass="subhead"
            subheader="Explore The Rich Diversity Of Nigerian Culture "
            paragraphText={
              <ul>
                <li>
                  - Cultural Heritage Tours: Explore Nigeria's rich history and
                  traditions
                </li>
                <li>
                  - Adventure Tours: Go hiking, rock climbing, or on a safari
                  adventure
                </li>
                <li>- Food and Wine Tours: Sample local cuisine and drinks</li>
                <li>
                  - Historical Landmarks Tours: Visit iconic sites like the
                  National Museum or Tarkwa Bay Beach
                </li>
              </ul>
            }
             cta="cta"
            callToaction="Book Now"
            destImgClass="destImg"
            image1={img1}
            imageClass="image"
          />
        </div>

        <div className="Tourservices">
          <DestinationData
            contentContainer="ServicecontentContainer"
            destTextClass="destText"
            header="Travel Services"
            subheadclass="subhead"
            subheader="Unparalleled Service Experience"
            paragraphText={
              <ul>
                <li>- Hotel Reservation: Reserve comfortable accommodations</li>
                <li>
                  - Transportation: Arrange for airport pickups, drop-offs, and
                  tour transportation
                </li>
                <li>
                  - Travel Insurance: Get protected against unexpected trip
                  cancellations or interruptions
                </li>
                <li>- Hotel Reservation: Reserve comfortable accommodations</li>
                <li>
                  - Transportation: Arrange for airport pickups, drop-offs, and
                  tour transportation
                </li>
                <li>
                  - Travel Insurance: Get protected against unexpected trip
                  cancellations or interruptions
                </li>
              </ul>
            }
            cta="cta"
            callToaction="Book Now"
            destImgClass="destImg"
            image1={img2}
            image2={img3}
            imageClass="image"
          />
        </div>

        <div className="customizedTours">
          <DestinationData
            contentContainer="ServicecontentContainer two"
            destTextClass="destText"
            header="Customized Tours"
            subheadclass="subhead"
            subheader="Where Your Dreams Become Your Reality"
            paragraphText={
              <ul>
                <li>
                  - Private Tours: Create a personalized itinerary for yourself
                  or group
                </li>
                <li>
                  - Group Tours: Join a guided tour with like-minded travelers
                </li>
                <li>
                  - Corporate Tours: Plan a business trip or team-building
                  retreat
                </li>
              </ul>
            }
            cta="cta"
            callToaction="Book Now"
            destImgClass="destImg reverse"
            image1={img4}
            imageClass="image"
          />
        </div>

        <div className="AdditionalServices">
          <h1 className="additionalServices header">Additional Services</h1>
          <ul>
            <li>
              - Visa Assistance: Get help with visa applications and processing
            </li>
            <li>
              - Travel Documentation: Obtain necessary travel documents, such as
              passports and ID cards
            </li>
            <li>
              - Language Translation: Get language translation services for
              non-English speakers
            </li>
          </ul>
          <button>learn more</button>
        </div>

        <div className="whyChooseUs">
          <h1 className="whychooseus header">Why Choose Us?</h1>
          <h3 className="subheader"> Here are some reasons why you should choose us for your travel needs</h3>
          <div className="whyContainer">
            <CardsData
              CardsContainer="whyCard"
              CardsTitle="Competitive Prices"
              CardParagraph={
                <>We offer affordable prices without compromising on quality</>
              }
            />
            <CardsData
              CardsContainer="whyCard"
              CardsTitle="Expert Knowledge"
              CardParagraph={
                <>
                  Our team has extensive knowledge of Nigeria's travel industry
                </>
              }
            />
            <CardsData
              CardsContainer="whyCard"
              CardsTitle="Personalized Service"
              CardParagraph={
                <>We tailor our services to meet your unique needs</>
              }
            />
          </div>
        </div>
        {/* this is the testimonial section of the home page */}
      </div>
    </>
  );
};

export default Serveinfo;

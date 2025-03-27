import React from "react";
import "./serveinfo.css";

const Serveinfo = () => {
  return (
    <>
      <div className="Servicecontainer">
        <div className="Tourpackages">
          <h1 className="tourPackages header">Tour Packages</h1>
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
              - Historical Landmarks Tours: Visit iconic sites like the National
              Museum or Tarkwa Bay Beach
            </li>
          </ul>
        </div>

        <div className="Tourservices">
          <h1 className="tourservices header">Travel Services</h1>
          <ul>
            <li>- Hotel Reservation: Reserve comfortable accommodations</li>
            <li>
              - Transportation: Arrange for airport pickups, drop-offs, and tour
              transportation
            </li>
            <li>
              - Travel Insurance: Get protected against unexpected trip
              cancellations or interruptions
            </li>
          </ul>
        </div>

        <div className="customizedTours">
          <h1 className="customizedtours header">Customized Tours</h1>
          <ul>
            <li>
              - Private Tours: Create a personalized itinerary for yourself or
              group
            </li>
            <li>
              - Group Tours: Join a guided tour with like-minded travelers
            </li>
            <li>
              - Corporate Tours: Plan a business trip or team-building retreat
            </li>
          </ul>
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
        </div>

        <div className="whyChooseUs">
          <h1 className="whychooseus header">Why Choose Us?</h1>
          <ul>
            <li>
              - Expert Knowledge: Our team has extensive knowledge of Nigeria's
              travel industry
            </li>
            <li>
              - Personalized Service: We tailor our services to meet your unique
              needs
            </li>
            <li>
              - Competitive Prices: We offer affordable prices without
              compromising on quality
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Serveinfo;

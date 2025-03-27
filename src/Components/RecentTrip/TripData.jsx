import React from "react";
import "./Trip.css"


const TripData = (props) => {
  return (
    <>
     <div className={props.TContainer}>
     <div className={props.cardsContainer}>
          <div className={props.tripCardclass}>
            <div className={props.ImgContainerClass}>
              <img src={props.tripimg} alt="" className={props.imgClass} />
            </div>
            <h1>{props.tripLocation}</h1>
            <h3>{props.tripDescription}</h3>
          </div>
        </div>

     </div>
    </>
  );
};

export default TripData;

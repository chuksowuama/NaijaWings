import React from "react";
import "./Destination.css";
import img4 from "../../assets/EmirPalace.jpg";
import img5 from "../../assets/EmirPalace.jpg";

const DestinationData = (props) => {
  return (
    <>
      <div className={props.ContainerClass}>
        <div className={props.contentContainer}>
        <div className={props.destTextClass}>
          <h1>{props.header}</h1>
          <h3>{props.subheader}</h3>
          <h2>{props.paragraphText}</h2>
        </div>
        <div className={props.destImgClass}>
          <img src={props.image1} alt="" className={props.imageClass}/>
          <img src={props.image2} alt="" className={props.imageClass}/>
        </div>
        </div>
      </div>
    </>
  );
};

export default DestinationData;

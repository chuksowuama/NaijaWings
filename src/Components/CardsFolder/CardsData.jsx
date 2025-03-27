import React from "react";
import "./CardsInfo.css";
const CardsData = (props) => {
  return (
    <>
      <div className={props.CardsContainer}>
        <div className={props.cardImageContainer}>
          <img src={props.CardsImg} alt="" className={props.CardimgClass} />
        </div>
        <h1>{props.CardsTitle}</h1>
        <h3>{props.CardParagraph}</h3>
      </div>
    </>
    // CardsContainer="CardsContainer"
    // cardImageContainer="cardImageContainer"
    // CardsImg="CardsImg"
    // CardimgClass="CardimgClass"
    // CardsTitle="CardsTitle"
    // CardParagraph="CardParagraph"
  );
};

export default CardsData;

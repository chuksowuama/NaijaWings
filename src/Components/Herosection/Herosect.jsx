import React from "react";
import "./Herosect.css";
const Herosect = (props) => {
  return (
    <>
      <div className={props.herocontainer}>
        <img src={props.heroImage} alt="" className="heroImage" />
        <div className="heroText">
          <h1 className="heroTitle">{props.heroTitle}</h1>
          <h3 className="heroparagraph">{props.heroParagraph}</h3>
          <a href={props.heroLink} className={props.heroButton}>{props.heroLinktext}</a>
        </div>
      </div>
    </>
  );
};

export default Herosect;

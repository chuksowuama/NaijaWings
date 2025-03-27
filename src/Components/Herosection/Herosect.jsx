import React from "react";
import "./Herosect.css";
import { Link } from "react-router-dom";
const Herosect = (props) => {
  return (
    <>
      <div className={props.herocontainer}>
        <img src={props.heroImage} alt="" className="heroImage" />
        <div className="heroText">
          <h1 className="heroTitle">{props.heroTitle}</h1>
          <h3 className="heroparagraph">{props.heroParagraph}</h3>
          <Link to={"/services"}>
          <a href={props.heroLink} className={props.heroButton}>{props.heroLinktext}</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Herosect;

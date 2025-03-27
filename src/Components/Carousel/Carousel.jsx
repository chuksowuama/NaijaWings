import React, { useEffect, useState } from "react";
import Carouselinfo from "./Carouselinfo";
import "./carousel.css";

const Carousel = (props) => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [direction, setdirection] = useState(1);


  useEffect(()=>{
    setInterval(()=>{
      if(direction===1){
        setcurrentIndex(currentIndex<4?currentIndex+1:4)
        if(currentIndex===4){
          setdirection(-1)
        }
      }else{
        setcurrentIndex(currentIndex>0?currentIndex-1:0)
      if(currentIndex===0){
        setdirection(1)
      }
      }
    },5000)
  },[currentIndex,Carouselinfo.length,direction])

  // function handleNext(){
  //   setcurrentIndex((currentIndex+1)% Carouselinfo.length)
  // }

  return (
    <>
      <div className="SliderContainer">
        <div className="Cardscontainer">
          <div className="wrapper">
            {Carouselinfo && Carouselinfo.length
              ? Carouselinfo.map((images, index) => (
                  <div
                    className="carouselCard"
                    key={images.id}
                    style={{ translate: `${-101.7 * currentIndex}%` }}
                  >
                    <div className="Cardimgcontainer">
                      <img src={images.images} alt="" />
                    </div>
                    <h1>{images.name}</h1>
                    <p>{images.title}</p>
                  </div>
                ))
              : null}
          </div>
          {/* <button onClick={handleNext}>next</button> */}
        </div>
      </div>
    </>
  );
};

export default Carousel;

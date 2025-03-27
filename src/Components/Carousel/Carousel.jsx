import React, { useEffect, useState } from "react";
import Carouselinfo from "./Carouselinfo";
import "./carousel.css";
import { useMediaQuery } from "react-responsive";

const Carousel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const [direction, setdirection] = useState(1);
  const[num,setnum]=useState(2)
  // const[responsive,setresponsive]=useState({query:"max-width:600px"})

  const mobile=useMediaQuery({ query: '(max-width: 600px)' })

 function response(){
  if(mobile){
    setnum(4)
  }else{
    setnum(2)
  }
  console.log(num)
}

 useEffect(()=>{
  response()
 },[num])

  useEffect(()=>{
    setInterval(()=>{
      if(direction===1){
        setcurrentIndex(currentIndex<2?currentIndex+1:num)
        if(currentIndex===num){
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
                    <h2>{images.title}</h2>
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

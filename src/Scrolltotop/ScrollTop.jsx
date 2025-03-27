import React, { useEffect, useState } from "react";
import "./Scrolltop.css"

const ScrollTop = () => {
const[scrolltoTop,setscrolltotop]=useState(false)


function displayscrollbtn(){
   if(scrollY>0){
    setscrolltotop(true)
   }else{
    setscrolltotop(false)
   }
}

  function handleScrolltop() {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
  }

  useEffect(() => {
    window.addEventListener("scroll",displayscrollbtn);
  },[]);
  return (
    <>
      <div className={`scroll ${scrolltoTop?"":"hidebtn"}`} >
        <i class="fa-solid fa-arrow-up" onClick={handleScrolltop} ></i>
      </div>
    </>
  );
};

export default ScrollTop;

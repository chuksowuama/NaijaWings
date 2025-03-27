import React, { useState } from "react";
import Menulist from "./Menulist";
import "./navCss.css";
import { Link } from "react-router-dom";
import SignupForm from "../Signupmodal/SignupForm";

const Navbar = () => {
  const[menuIcon,setMenuIcon]=useState(true)
  const[showlogin,setshowlogin]=useState(false)

function handleMenuicon(){
  setMenuIcon(!menuIcon)
}
function handlesignup(){
 setshowlogin(true)
 console.log(showlogin)
}
function closesignup(){
  setshowlogin(false)
}

  return (
    <>
    {
      showlogin? <SignupForm onclicks={closesignup}/>:<></>
    }
    <nav>
      <div className="logo">
        <h1>Naijawings</h1>
      </div>
      <div>
        <div className="menuIncons" onClick={handleMenuicon}>
          <i className={menuIcon?"fa-solid fa-bars":"fa-solid fa-xmark"}></i>
        {/* <i className="fa-solid fa-bars"></i>
        <i class="fa-solid fa-xmark"></i> */}
        </div>
        <ul className={menuIcon?"menulist":"menulist active"}>
          {Menulist && Menulist.length
            ? Menulist.map((list, index) => (
                <li key={index}>
                  <Link to={list.URL} className={list.navClass}>
                    <i className={list.icon}></i>
                    {list.title}
                  </Link>
                </li>
              ))
            : null}
            <button onClick={handlesignup}>SignUp</button>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;

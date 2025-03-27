import React, { useState } from "react";
import Menulist from "./Menulist";
import logo from "./L4bpu201.svg";
import "./navCss.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const[menuIcon,setMenuIcon]=useState(true)
  const[displaymenulist,setdisplaymenulist]=useState("")
function handleMenuicon(){
  setMenuIcon(!menuIcon)
}

  return (
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
            <button>SignUp</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

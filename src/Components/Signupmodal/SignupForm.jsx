import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = ({ onclicks }) => {
  const [currentForm, setcurrentForm] = useState("LOGIN");
  return (
    <>
        <div className="formContainer">
          <span className="cancel" onClick={onclicks}><i class="fa-solid fa-xmark"></i></span>
          <h1 className="header">{currentForm}</h1>
          <form action="">
            {currentForm === "SIGN UP" ? (
              <input type="text" placeholder="Name" required />
            ) : null}
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="PassWord" required />
            {currentForm === "SIGN UP" ? (
              <input type="Password" placeholder="Confirm PassWord" required />
            ) : null}
            {
              currentForm==="SIGN UP"?<div className="signupCondition">
              <input type="checkbox" required />
              <p>By continuing,i agree with the terms of use & privacy</p>
            </div>:null
            }
            <input type="submit" />
            
            {currentForm === "LOGIN"?<p>create a new account?<span style={{color:"darkgreen"}} onClick={()=>setcurrentForm("SIGN UP")}>Click here</span></p>:
            <p>Already have an account? <span style={{color:"darkgreen"}} onClick={()=>setcurrentForm("LOGIN")}>Click here</span></p>}
            
          </form>
        </div>
    </>
  );
};

export default SignupForm;

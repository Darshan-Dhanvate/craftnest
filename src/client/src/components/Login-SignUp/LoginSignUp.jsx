import React, { useState } from 'react'
import './LoginSignUp.css'
import { MdEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

    // extra part, just navigating to home page

    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    // For now, just navigate to the home page
    navigate('/home');
  };

    // extra part is till here

  return (
    <div>
      <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">

            {action==="Login"?<div></div>:
            <div className="input">
                <div className="img"><FaRegUser size={30} color='blue'/></div>
                <input type="text" placeholder='Name'/>
            </div>
            }

            <div className="input">
                <div className="img"><MdEmail size={30} color='blue'/></div>
                <input type="email" placeholder='Email'/>
            </div>

            <div className="input">
                <div className="img"><MdOutlinePassword size={30} color='blue'/></div>
                <input type="password" placeholder='Password'/>
            </div>
        </div>

        {action==="Sign Up"?<div></div>:
             <div className="forgotPassword">Forgot Password? <span>Click here!</span></div> 
        }
       
        <div className="submitContainer">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign-Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

        {/* Extra part */}
        <div className="guest" onClick={handleSubmit}>Guest- 💂‍♂️</div>
      </div>
    </div>
  )
}

export default LoginSignup

import { LOGO_URL } from "../utils/costants";
import { useState } from "react";
const Header = () => {
const [btnNameReact , setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
            alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login" 
          onClick={() =>
             {setBtnNameReact("Logout");  
             }}
             >
            {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
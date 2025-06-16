import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
const Header = () => {
const [btnNameReact , setBtnNameReact] = useState("Login");
const onlineStatus = useOnlineStatus();
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
          <li>online status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to ="Home">Home</Link>  </li>
          <li><Link to ="About">About</Link> </li>
          <li><Link to ="Contact">Contact</Link></li>
            <li><Link to ="Grocery">Grocery</Link></li>
          <li><Link to ="Cart">Cart</Link></li>
        
          <button className="login" 
         onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
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



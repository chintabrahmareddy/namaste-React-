import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";
import{ useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="w-30">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4 items-center">
          <li className="px-4">Online: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/Home">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/Cart">Cart ({cart.length} items)</Link>
          </li>

          <li className="px-4">
            <button className="login" 
         onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
             >
            {btnNameReact}
            </button>
          </li>

          <li className="px-4 font-bold text-gray-700">
            👤 {loggedInUser?.name}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

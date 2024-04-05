import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/themeSlice";
import logo from "../../assets/icons/acicon.png";
import { FaUser } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const Header = () => {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <header>
      <div className="headerWrapper">
        <div className="header-logo-links">
          <div className="header-logo">
            <img src={logo} alt="logo" />
            <p>Deep Learn Academy</p>
          </div>
          <ul className="header-links">
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
        <div className="header-countdown">
          <span>00</span>: <span>00</span>: <span>00</span>: <span>00</span>
        </div>
        <div className="header-icons">
          <FaUser />
          <IoMoonSharp />
          <MdShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;

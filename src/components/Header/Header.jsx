import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/themeSlice";
// @ts-ignore
import logo from "../../assets/icons/acicon.png";
import { FaUser } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";
import Countdown from "../Shared/Countdown/Countdown";

const Header = () => {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <header className={theme ? "headerWrapper dark" : "headerWrapper light"}>
      <div className="header-logo-links">
        <Link to="/" className="header-logo">
          <img src={logo} alt="logo" className="header-logo-image" />
          <p>Deep Learn Academy</p>
        </Link>
        <ul className="header-links">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <button className="nav-item navBtn">Menu</button>
          <Link to="/" className="nav-item">
            Blog
          </Link>
          <Link to="/" className="nav-item">
            About
          </Link>
          <Link to="/" className="nav-item">
            Contact
          </Link>
        </ul>
      </div>
      <div className="header-countdown">
        <Countdown />
      </div>
      <div className="header-icons">
        <button>
          <FaUser className="header-icons" />
        </button>
        <button onClick={() => dispatch(toggle(!theme))}>
          <IoMoonSharp className="header-icons" />
        </button>
        <button>
          <FaShoppingCart className="header-icons" />
        </button>
      </div>
    </header>
  );
};

export default Header;

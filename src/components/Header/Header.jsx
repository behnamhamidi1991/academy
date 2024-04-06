import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../features/themeSlice";
// @ts-ignore
import logo from "../../assets/icons/acicon.png";
import { FaUser } from "react-icons/fa6";
import { IoMoonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./header.css";
import { Link } from "react-router-dom";
import Countdown from "../Shared/Countdown/Countdown";
import Megamenu from "./Megamenu/Megamenu";

const Header = () => {
  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <div
      className={theme ? "headerMenuWrapper dark" : "headerMenuWrapper light"}
    >
      <header className={theme ? "headerWrapper dark" : "headerWrapper light"}>
        <div className="header-logo-links">
          <Link to="/" className="header-logo">
            <img src={logo} alt="logo" className="header-logo-image" />
            <p>Deep Learn Academy</p>
          </Link>
        </div>
        <form className="header-serach-form">
          <input
            type="text"
            placeholder="Search ..."
            className="header-search-input"
          />
          <button className="header-serach-btn">Search</button>
        </form>
        <div className="countdown">
          <BiSolidOffer className="offIcon" />
          <Countdown />
        </div>
        <div className="header-icons">
          <button>
            <FaUser className="header-icons" />
          </button>
          <button onClick={() => dispatch(toggle(!theme))}>
            {theme ? (
              <FiSun className="header-icons" />
            ) : (
              <IoMoonSharp className="header-icons" />
            )}
          </button>
          <button>
            <FaShoppingCart className="header-icons" />
          </button>
          <button>
            <GiHamburgerMenu className="header-icons" />
          </button>
        </div>
      </header>
      <Megamenu />
    </div>
  );
};

export default Header;

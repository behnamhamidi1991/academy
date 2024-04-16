import React, { useEffect, useState } from "react";
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
import Searchbar from "../Shared/Searchbar/Searchbar";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== undefined) {
        const threshold = 30;
        const currentScrollPos = window.pageYOffset;
        const shouldBeSticky = currentScrollPos > threshold;

        if (shouldBeSticky !== isSticky) {
          setIsSticky(shouldBeSticky);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSticky]);

  const headerClass = `headerMenuWrapper ${isSticky ? "fixed show" : ""}`;

  const theme = useSelector((state) => state.theme.dark);
  const dispatch = useDispatch();

  return (
    <div className={headerClass}>
      <header className={theme ? "headerWrapper dark" : "headerWrapper light"}>
        <div className="header-logo-links">
          <Link to="/" className="header-logo">
            <img src={logo} alt="logo" className="header-logo-image" />
            <p>Deep Learn Academy</p>
          </Link>
        </div>
        <div className="header-serach-form">
          <Searchbar />
        </div>
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
          <button onClick={() => setOpenMenu(!openMenu)}>
            <GiHamburgerMenu className="header-icons" />
          </button>
        </div>
      </header>
      {openMenu && (
        <div>
          {" "}
          <Megamenu />{" "}
        </div>
      )}
    </div>
  );
};

export default Header;

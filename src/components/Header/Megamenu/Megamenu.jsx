import React from "react";
import "./megamenu.css";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { GiTeacher } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
import { MdGroups2 } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";
import { PiStudentFill } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { HiPaintBrush } from "react-icons/hi2";
import { CiStreamOn } from "react-icons/ci";
import { FaChartLine } from "react-icons/fa";
import { FaSteamSymbol } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";

const Megamenu = () => {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <div className={theme ? "mega-menu dark" : "mega-menu light"}>
      <ul>
        <li>
          <IoMdHome className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Home
          </Link>
        </li>
        <li>
          <FaBlog className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Blog
          </Link>
        </li>
        <li>
          <RiCustomerService2Line className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Services
          </Link>
        </li>
        <li>
          <IoLogoWhatsapp className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Contact
          </Link>
        </li>
        <li>
          <TfiWrite className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            About
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <GiTeacher className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Courses
          </Link>
        </li>
        <li>
          <MdEventAvailable className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Events
          </Link>
        </li>
        <li>
          <MdGroups2 className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Meetings
          </Link>
        </li>
        <li>
          <SiWebmoney className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Payment
          </Link>
        </li>
        <li>
          <PiStudentFill className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Students
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <FaCodeBranch className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Branches
          </Link>
        </li>
        <li>
          <FaChalkboardTeacher className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Teachers
          </Link>
        </li>
        <li>
          <FaUniversity className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Academy
          </Link>
        </li>
        <li>
          <MdOutlineSupportAgent className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Support
          </Link>
        </li>
        <li>
          <FaPeopleGroup className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Seminars
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <MdEngineering className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Engineering
          </Link>
        </li>
        <li>
          <HiPaintBrush className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Art & Music
          </Link>
        </li>
        <li>
          <CiStreamOn className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Streaming
          </Link>
        </li>
        <li>
          <FaChartLine className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Trading
          </Link>
        </li>
        <li>
          <FaSteamSymbol className="mega-menu-icon" />
          <Link to="/" className="mega-menu-item">
            Bootcamps
          </Link>
        </li>
      </ul>

      <div className="menuImage"></div>
    </div>
  );
};

export default Megamenu;

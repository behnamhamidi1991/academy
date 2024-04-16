import React from "react";
import "./footer.css";
import { useSelector } from "react-redux";
import { RiInstagramFill } from "react-icons/ri";
import { SiTelegram } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { TbBrandTiktokFilled } from "react-icons/tb";
import { BsPinterest } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosAppstore } from "react-icons/io";

const Footer = () => {
  const theme = useSelector((state) => state.theme.dark);

  return (
    <footer className={theme ? "footer dark" : "footer light"}>
      <div className="footer-left">
        <h2>Learn more about us</h2>
        <p>
          Lorem ipsum dolor sit amet . The graphic and typographic operators
          know this well, in reality all the professions dealing with the
          universe of communication have a stable relationship with these words,
          but what is it? Lorem ipsum is a dummy text without any sense.Lorem
          ipsum dolor sit amet . The graphic and typographic operators know this
          well, in reality all the professions dealing with the universe of
          communication have a stable relationship with these words, but what is
          it? Lorem ipsum is a dummy text without any sense.
        </p>
        <ul className="socialLinks">
          <li>
            <RiInstagramFill className="footer-socialIcon" />
          </li>
          <li>
            <SiTelegram className="footer-socialIcon" />
          </li>
          <li>
            <IoLogoWhatsapp className="footer-socialIcon" />
          </li>
          <li>
            <FaSquareXTwitter className="footer-socialIcon" />
          </li>
          <li>
            <FaFacebook className="footer-socialIcon" />
          </li>
          <li>
            <FaYoutube className="footer-socialIcon" />
          </li>
          <li>
            <TbBrandTiktokFilled className="footer-socialIcon" />
          </li>
          <li>
            <BsPinterest className="footer-socialIcon" />
          </li>
        </ul>
      </div>
      <div className="footer-navlinks">
        <ul>
          <h4>Easy Access</h4>
          <li>Homepage</li>
          <li>Events</li>
          <li>Services</li>
          <li>Blogpage</li>
          <li>About & contact</li>
        </ul>
        <ul>
          <h4>Our Services</h4>
          <li>Online Courses</li>
          <li>Seminars</li>
          <li>Webinars</li>
          <li>TTC Courses</li>
          <li>Learning Trips</li>
        </ul>

        <ul>
          <h4>Branches</h4>
          <li>Tehran 421</li>
          <li>Shiraz 272</li>
          <li>Esfahan 312</li>
          <li>Ahvaz 416</li>
          <li>Mashhad 214</li>
        </ul>

        <ul>
          <h4>Download our apps</h4>
          <li className="footer-google">
            <FaGooglePlay />
            <p>Google play</p>
          </li>
          <li className="footer-store">
            <IoIosAppstore />
            <p>App Store</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

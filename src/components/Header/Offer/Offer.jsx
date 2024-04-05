import React, { useState } from "react";
import "./offer.css";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";

const Offer = () => {
  const [offer, setOffer] = useState(true);

  return (
    <div className={offer ? "offer" : "offer hideOffer"}>
      <button className="closeBtn" onClick={() => setOffer(false)}>
        <GrFormClose />
      </button>
      <p>50% OFF for our vip students for 6 months!</p>
      <Link to="/" className="offLink">
        click
      </Link>
    </div>
  );
};

export default Offer;

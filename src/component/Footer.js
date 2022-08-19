import React from 'react'

import './Footer.css'

import {
  BiChip,
  BiMessageRounded,
  BiGroup,
  BiPaintRoll,
  BiStreetView,
} from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <div>
              <BiChip size={30} />
              Payments
      </div>
      <div>
              <BiMessageRounded size={30} />
              Direct
      </div>
      <div>
              <BiGroup size={30} />
              Communities
      </div>
      <div>
              <BiPaintRoll size={30} />
              Explore
      </div>
      <div>
              <BiStreetView size={30} />
              Your Profile
      </div>
    </div>
  );
}

export default Footer
import React from "react";

import "./Header.css";
import { SiLinux } from "react-icons/si";
import { DiYii } from "react-icons/di";
import { BiArrowBack } from "react-icons/bi";

function Header() {
  return (
    <div className="header">
      <div className="header-upper">
        <div className="header-upper-left">
          <div className="arrowback">
            <BiArrowBack size={35} />
          </div>
          <div className="linux">
            <SiLinux size={40} />
          </div>
        </div>
        <div className="header-upper-right">
          <div className="username"> bazuki.rariko</div>
          <div className="follow">
            <button className="follow-button">Follow</button>
            <button className="message-button">Message</button>
            <button className="B">
              <DiYii size={25} />{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="counts">
        <div className="NFT">
          <div>NFTs</div>
          <div>33</div>
        </div>
        <div className="Followers">
          <div>Followers</div>
          <div>311</div>
        </div>
        <div className="Following">
          <div>Following</div>
          <div>111</div>
        </div>
      </div>
      <div className='options'>
        <div className='option1'>Collections</div>
        <div className='option2'>Communities</div>
        <div className='option3'>Activity</div>
      </div>
    </div>
  );
}

export default Header;

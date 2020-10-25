import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
      {/* <Link> */}
      <img
        className="header_img"
        src="https://www.searchpng.com/wp-content/uploads/2019/01/OLX-Icon-PNG-715x596.png"
        alt="img"
      />
      {/* </Link> */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <p className="header_optionLogin">Login</p>
        </div>
        <div className="header_option">
          <button className="header_optionSell">
                    <span id="oo">+</span>SELL
                  </button>
                  </div>
        </div>
      </div>
    
  );
}
export default Header;

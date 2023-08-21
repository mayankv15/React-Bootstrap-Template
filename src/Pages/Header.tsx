import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducer"; // Import your RootState type

function Header() {
  const Navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.user.login); // Update RootState type
  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogoutClick = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch the logout action here
    Navigate("/");
  };

  const handleProfileClick = () => {
    Navigate("/profile");
  };

  return (
    <div className="navbar">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="nav-details">
        <div className="search-container">
          <form onSubmit={() => {}}>
            <input
              type="text"
              placeholder="Search.."
              name="search"
              onKeyUp={() => {}}
            />
            <button type="submit">search</button>
          </form>
        </div>
        <a href="/Dashboard">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="/Dashboard">
          <i className="fa fa-home"></i>
        </a>
        <a href="/My-Network">My Network</a>
        <a href="/Message">Message</a>
        <a href="/Notiifcations">Notiifcations</a>
      </div>
      <div className="navbar-profile">
        <h3>
          <button onClick={handleDropdownClick}>
            <i className="fa fa-user" aria-hidden="true"></i>
          </button>
        </h3>

        {isDropdownOpen && (
          <div className="dropdown">
            <ul>
              <button>
                <a
                  href="/"
                  onClick={handleLogoutClick}
                  style={{ color: "black" }}
                >
                  Logout
                </a>
                <a
                  href="/Profile"
                  onClick={handleProfileClick}
                  style={{ color: "black" }}
                >
                  Profile
                </a>
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

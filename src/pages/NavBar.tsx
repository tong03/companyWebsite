// NavBar.tsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Tooltip } from "react-tooltip";
import "../css/Navbar.css";
import {
  BLOG_PAGE_PATH,
  INTERVIEW_SELECTION_PAGE_PATH,
} from "../utils/Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import Modal from "../utils/Modal";

interface NavBarProps {
  signedIn: boolean;
  handleSignOut: () => void;
  handleSettingsClick: () => void;
  handleProfileClick: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  signedIn,
  handleSignOut,
  handleSettingsClick,
  handleProfileClick,
}) => {
  const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(false);
  const toggleFeedbackModal = () => {
    setIsFeedbackModalVisible(!isFeedbackModalVisible);
  };
  return (
    <>
      <nav className="navbar">
        <div className="left-group">
          <ul>
            <li className="site-logo-container">
              <Link to="/">
                <img
                  src="https://coditioning3.files.wordpress.com/2023/11/coditioning-logo-brain.png"
                  alt="Logo"
                />
              </Link>
            </li>
            <li className="button">
              <Link to="/app/learning" onClick={(e) => e.preventDefault()}>
                Learning
              </Link>
            </li>
            <li className="button">
              <Link
                to={INTERVIEW_SELECTION_PAGE_PATH}
                onClick={(e) => e.preventDefault()}
              >
                Mock Interviews
              </Link>
            </li>
            <li className="button">
              <Link to={BLOG_PAGE_PATH} onClick={(e) => e.preventDefault()}>
                Blog
              </Link>
            </li>
            <li className="button">
              <a onClick={toggleFeedbackModal} style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faCommentDots} /> Feedback
              </a>
            </li>
          </ul>
        </div>
        <div className="right-group">
          <ul>
            {!signedIn && (
              <li className="button signIn">
                <Link to="/signin" onClick={(e) => e.preventDefault()}>
                  Sign In
                </Link>
              </li>
            )}
            {!signedIn && (
              <li className="button signUp">
                <Link to="/signup" onClick={(e) => e.preventDefault()}>
                  Sign Up
                </Link>
              </li>
            )}
            {signedIn && (
              <li className="button">
                <Link
                  to={BLOG_PAGE_PATH}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSignOut();
                  }}
                >
                  Sign Out
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="icons">
          <SettingsIcon
            className="icon disabled-icon"
            onClick={handleSettingsClick}
            data-tooltip-id="settings-tooltip"
            data-tooltip-content="Settings"
          />
          <AccountCircleIcon
            className="icon disabled-icon"
            onClick={handleProfileClick}
            data-tooltip-id="profile-tooltip"
            data-tooltip-content="View your profile"
          />
        </div>
        <Tooltip id="profile-tooltip" />
        <Tooltip id="settings-tooltip" />
      </nav>

      {isFeedbackModalVisible && (
        <Modal
          content={<div>Feedback Page Here</div>}
          onClose={toggleFeedbackModal}
        ></Modal>
      )}
    </>
  );
};

export default NavBar;

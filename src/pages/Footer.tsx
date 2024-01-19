// src/components/Footer.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { ABOUT_PAGE_PATH, CAREERS_PAGE_PATH, CONTACT_PAGE_PATH, DISCORD_URL, PRIVACY_PAGE_PATH, TERMS_PAGE_PATH } from '../utils/Constants';
import '../css/Footer.css';
import Modal from '../utils/Modal';

const Footer: React.FC = () => {
  const [isFeedbackModalVisible, setIsFeedbackModalVisible] = useState(false);
  const toggleFeedbackModal = () => {
    setIsFeedbackModalVisible(!isFeedbackModalVisible);
  };
  return (
    <>
      {isFeedbackModalVisible && (
        <Modal
          content={<div>Feedback page content here ....</div>}
          onClose={toggleFeedbackModal}
        ></Modal>
      )}

      <footer className="footer">
        <div className="footer-links">
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDiscord} /> Discord
          </a>
          <a onClick={toggleFeedbackModal} style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon icon={faCommentDots} /> Feedback
          </a>
          <Link to={CAREERS_PAGE_PATH} onClick={(e) => e.preventDefault()}>Careers</Link>
          <Link to={CONTACT_PAGE_PATH} onClick={(e) => e.preventDefault()}>Contact Us</Link>
          <Link to={ABOUT_PAGE_PATH} onClick={(e) => e.preventDefault()}>About Us</Link>
          <Link to={TERMS_PAGE_PATH} onClick={(e) => e.preventDefault()}>Terms & Conditions</Link>
          <Link to={PRIVACY_PAGE_PATH} onClick={(e) => e.preventDefault()}>Privacy Policy</Link>

        </div>
      </footer>
    </>
  );
};

export default Footer;

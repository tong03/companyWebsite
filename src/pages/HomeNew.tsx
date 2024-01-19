import React from "react";
import "../css/HomeNew.css";

const HomeNew = () => {
  return (
    <div className="dashboard-container">
      <div className="saas-text">
        <h1>
          Learn how to interview <span style={{ color: "#146ef5" }}>today</span>{" "}
          - land your dream job{" "}
          <span style={{ color: "#146ef5" }}>tomorrow</span>
        </h1>
        <p>
          Master coding challenges, recall knowledge, and write bug-free code
          efficiently. Streamline interview preparation, excel in realistic
          conditions, and optimize your CV for standout success.
        </p>
      </div>
      <div className="buttons-container">
        <button className="start-button">
          Start your interview prep journey
        </button>
        <button className="demo-button">View Demo</button>
      </div>

      <div className="feature-cards-container">
        {/* Feature Card 1 */}
        <div className="feature-card">
          <h2>Feature 1</h2>
          <p>Description of Feature 1 goes here.</p>
        </div>
        {/* Feature Card 2 */}
        <div className="feature-card">
          <h2>Feature 2</h2>
          <p>Description of Feature 2 goes here.</p>
        </div>
        {/* Feature Card 3 */}
        <div className="feature-card">
          <h2>Feature 3</h2>
          <p>Description of Feature 3 goes here.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNew;

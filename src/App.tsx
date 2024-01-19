import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./utils/PublicLayout";
import "./styles.css";

import StateAccessor from "./StateAccessor";
import {
  NOT_SIGNED_IN_USER_USER_EMAIL,
  NOT_SIGNED_IN_USER_USER_ID,
} from "./utils/Constants";

// import HomePage from "./pages/HomePage";
import HomeNew from "./pages/HomeNew";
const App: React.FC = () => {
  const [userId, setUserId] = useState(NOT_SIGNED_IN_USER_USER_ID);
  const [userName, setUserName] = useState("Alpha User");
  const [userEmail, setUserEmail] = useState(NOT_SIGNED_IN_USER_USER_EMAIL);

  return (
    <StateAccessor.Provider
      value={{
        userId,
        setUserId,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<HomeNew />} />
          </Route>
        </Routes>
      </Router>
    </StateAccessor.Provider>
  );
};

export default App;

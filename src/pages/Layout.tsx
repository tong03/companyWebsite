// Layout.tsx

import React, { useState, useEffect, useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Footer from './Footer';
import '../css/Layout.css';
import NavBar from './NavBar'
import { Alert } from '@mui/material';
import StateAccessor from '../StateAccessor';
import { EMAIL_TO_USER_ID_MAPPING, NOT_SIGNED_IN_USER_USER_EMAIL, NOT_SIGNED_IN_USER_USER_ID } from '../utils/Constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [signedIn, setSignedIn] = useState(false);
  const { setUserId, setUserEmail } = useContext(StateAccessor);

  // Using the useEffect hook to perform side effects (in this case, authentication state changes)
  useEffect(() => {
    // Subscribe to authentication state changes
    // `onAuthStateChanged` returns a method to unsubscribe from these changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    });

    // Cleanup function: this will run when the component is unmounted
    return () => {
      // Unsubscribe from the authentication state changes to avoid memory leaks
      unsubscribe();
    };
  }, []); // Empty dependency array means this useEffect will run once when the component mounts and then cleanup when it unmounts


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Clear the React state
        setUserEmail(NOT_SIGNED_IN_USER_USER_EMAIL);
        setUserId(NOT_SIGNED_IN_USER_USER_ID);
  
        // Clear the localStorage mapping
        localStorage.removeItem(EMAIL_TO_USER_ID_MAPPING);
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };
  

  const handleSettingsClick = () => {
    //TODO: implement
    return null;
  };
  const handleProfileClick = () => {
    //TODO: implement
    return null;
  };

  return (
    <div className="layoutPage">
      <NavBar
        signedIn={signedIn}
        handleSignOut={handleSignOut}
        handleSettingsClick={handleSettingsClick}
        handleProfileClick={handleProfileClick}
      />
      <main>
        <div className='mobile-alert'>
          <Alert severity="warning">
            This site is not optimized for mobile devices. Please access from your desktop/laptop for the best experience.
          </Alert>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
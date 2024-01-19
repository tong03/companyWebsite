import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { Navigate } from 'react-router-dom';
import Layout from '../pages/Layout';

const ProtectedLayout: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/signin" replace />
  );
};

export default ProtectedLayout;
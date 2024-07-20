import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

const GoogleSignOut = () => {
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <button onClick={handleSignOut}>Sign out</button>
  );
};

export default GoogleSignOut;

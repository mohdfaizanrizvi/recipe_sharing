import React from 'react';
import { auth, provider, signInWithPopup } from '../firebase';

const GoogleSignIn = () => {
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <button onClick={handleSignIn}>Sign in with Google</button>
  );
};

export default GoogleSignIn;

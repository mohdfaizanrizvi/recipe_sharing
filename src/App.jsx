import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import './components/style.css';
import Meal from './components/Meal';
import Recipe from './components/Recipe';
import GoogleSignIn from './components/GoogleSignIn';
import GoogleSignOut from './components/GoogleSignOut';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  if (user === null) {
    return (
     <>
        <h1>Firebase Google Auth</h1>
        <h2><GoogleSignIn /></h2>
     </>
    );
  }

  return (
    <div className="centered-container">
      <h1>Welcome {user.displayName}</h1>
      <GoogleSignOut />
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route exact path="/:recipeId" element={<Recipe />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import './Button.css';

const SignInButton = () => (
  <button className="btn-signin" onClick={() => alert('Sign In button clicked!')}>
    Sign In
  </button>
);

export default SignInButton;

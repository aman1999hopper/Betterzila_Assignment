import React from 'react';
import './Button.css';

const SignUpButton = () => (
  <button className="btn-signup" onClick={() => alert('Sign Up button clicked!')}>
    Sign Up
  </button>
);

export default SignUpButton;

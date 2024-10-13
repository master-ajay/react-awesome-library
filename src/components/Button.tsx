import React from 'react';
import './button.css';  // Styles for the Button

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button className="custom-button" onClick={onClick}>
    {label}
  </button>
);

export default Button;

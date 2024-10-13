import React, { useState } from 'react';
import './toaster.css';  // Styles for the Toaster

interface ToasterProps {
  message: string;
  duration?: number;
}

const Toaster: React.FC<ToasterProps> = ({ message, duration = 3000 }:ToasterProps) => {
  const [visible, setVisible] = useState(true);

  setTimeout(() => setVisible(false), duration);

  return visible ? (
    <div className="toaster">
      <p>{message}</p>
    </div>
  ) : null;
};

export default Toaster;

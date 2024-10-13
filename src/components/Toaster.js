import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import './toaster.css'; // Styles for the Toaster
const Toaster = ({ message, duration = 3000 }) => {
    const [visible, setVisible] = useState(true);
    setTimeout(() => setVisible(false), duration);
    return visible ? (_jsx("div", { className: "toaster", children: _jsx("p", { children: message }) })) : null;
};
export default Toaster;

import { jsx as _jsx } from "react/jsx-runtime";
import './button.css'; // Styles for the Button
const Button = ({ label, onClick }) => (_jsx("button", { className: "custom-button", onClick: onClick, children: label }));
export default Button;

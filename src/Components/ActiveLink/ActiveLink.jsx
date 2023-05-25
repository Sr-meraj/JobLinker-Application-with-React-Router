/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import './active.css'

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={`dark:text-gray-300 font-semibold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm`}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
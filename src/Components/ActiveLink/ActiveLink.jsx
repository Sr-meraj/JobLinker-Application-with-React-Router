/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import './active.css'

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={`block sm:inline-block dark:text-gray-300 font-semibold hover:bg-gray-700 hover:text-white rounded-md px-4 py-4 sm:px-3 sm:py-2 text-base`}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;
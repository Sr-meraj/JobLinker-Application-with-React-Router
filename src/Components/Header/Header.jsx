// import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/JobLinker.jpg";
import ActiveLink from "../ActiveLink/ActiveLink";

/* eslint-disable react/no-unknown-property */
const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
        console.log(mobileMenu);
    }
    return (
        <div>
            <nav className="bg-gray-100 dark:bg-slate-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 container">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!-- Mobile menu button--> */}
                            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={toggleMobileMenu}>
                                <span className="sr-only">Open main menu</span>

                                {/* <!--Icon when menu is closed.
                                Menu open: "hidden", Menu closed: "block"--> */}

                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                                {/* <!--Icon when menu is open.
                                Menu open: "block", Menu closed: "hidden"--> */}

                                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-between">
                            <div className="flex flex-shrink-0 items-center">
                                <NavLink to="/" aria-current="page">

                                    <img className="block h-8 w-auto lg:hidden" src={logo} alt="JobLinker" />
                                </NavLink>
                                <NavLink to="/" aria-current="page">

                                    <img className="hidden h-8 w-auto lg:block" src={logo} alt="JobLinker" />
                                </NavLink>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex">
                                <div className="flex space-x-4 items-center">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <ActiveLink to="/" >Home</ActiveLink>
                                    <ActiveLink to="/statistics">Statistics</ActiveLink>
                                    <ActiveLink to="/applied" >Applied Jobs</ActiveLink>
                                    <ActiveLink to="/blog" >Blog</ActiveLink>

                                </div>
                            </div>
                            <button className="hidden sm:block px-2 py-1.5 sm:px-3.5 sm:py-2.5 rounded-md font-medium text-white text-base bg-gradient-to-l from-indigo-600 to-purple-600">
                                Star Applying
                            </button>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className={`sm:hidden ${mobileMenu ? 'block' : 'hidden'} transition-all duration-500 ease-linear overflow-clip`} id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col gap-4 absolute w-full transition-all duration-500 ease-linear bg-indigo-100 dark:bg-slate-600 z-50">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <ActiveLink to="/" aria-current="page">Home</ActiveLink>
                        <ActiveLink to="/statistics" >Statistics</ActiveLink>
                        <ActiveLink to="/applied" >Applied Jobs</ActiveLink>
                        <ActiveLink to="/blog" >Blog</ActiveLink>
                        <Link to='#apply'>
                            <button className=" px-3.5 py-2.5 rounded-md font-medium text-white text-lg bg-gradient-to-l from-indigo-600 to-purple-600 w-full">
                                Star Applying
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
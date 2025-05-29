import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const NavBar = () => {
    const { user, userSignOut } = use(AuthContext);

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                console.log("signed out user");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const links = (
        <>
            <li>
                <NavLink className={"nav"} to="/">
                    Home
                </NavLink>
            </li>

            {/* for applicants links. check role as well */}

            {user && (
                <>
                    <li>
                        <NavLink className={"nav"} to="/myApplications">
                            My Applications
                        </NavLink>
                    </li>
                </>
            )}

            {/* for recruiter. check role as well */}

            {
                user && <>
                
                    <li><NavLink className={"nav"} to="/addJob">Add Job</NavLink></li>
                
                </>
            }
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    Career Code
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <button onClick={handleSignOut} className="btn">
                        Sign Out
                    </button>
                ) : (
                    <>
                        <NavLink to="/register" className="btn">
                            Register
                        </NavLink>
                        <NavLink to="/signIn" className="btn">
                            Sign In
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavBar;

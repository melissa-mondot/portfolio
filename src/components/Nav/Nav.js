import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Nav = () => {
	let location = useLocation();
	// console.log(location.pathname);

	return (
		<>
			<nav className="main_nav">
				{location.pathname === "/" ? null : (
					<NavLink className="navlink" to="/">
						Home
					</NavLink>
				)}
				<NavLink className="navlink" to="/resume">
					Resume
				</NavLink>
				<NavLink className="navlink" to="/contact">
					Contact Me
				</NavLink>
			</nav>
		</>
	);
};

export default Nav;

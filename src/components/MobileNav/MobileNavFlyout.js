// import React, { useState, useEffect } from 'react';
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { bool } from "prop-types";
import { StyledMenu } from "./MobileNavStyles.js";

export const MobileNavFlyout = ({ open, setOpen }) => {
	// const [hook, setHook] = useState(hook);
	let location = useLocation();
	let path = location.pathname;

	return (
		<StyledMenu open={open} setOpen={setOpen}>
			{path === "/" ? null : (
				<NavLink className="navlink" to="/">
					Home
				</NavLink>
			)}
			{path === "/resume" ? null : (
				<NavLink className="navlink" to="/resume">
					Resume
				</NavLink>
			)}
			{path === "/contact" ? null : (
				<NavLink className="navlink" to="/contact">
					Contact Me
				</NavLink>
			)}
		</StyledMenu>
	);
};

MobileNavFlyout.propTypes = {
	open: bool.isRequired,
};

// export default MobileNavFlyout;

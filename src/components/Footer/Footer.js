import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StyledFooter } from "./FooterStyles.js";

const Footer = () => {
	let location = useLocation();

	return (
		<>
			<StyledFooter>
				<div className="footer">
					<h2>Melissa Mondot</h2>
					<div>
						{location.pathname === "/" ? null : <NavLink to="/">Home</NavLink>}
						<NavLink to="/resume">Resume</NavLink>
						<NavLink to="/contact">Contact Me</NavLink>
						<div>
							<a href="https://www.linkedin.com/in/melissamurphy/">
								<i className="fab fa-linkedin fa-lg"></i>
							</a>
							<a href="https://github.com/melissa-mondot">
								<i className="fab fa-github-square fa-lg"></i>
							</a>
							<a href="https://twitter.com/thinkModes">
								<i className="fab fa-twitter-square fa-lg"></i>
							</a>
						</div>
					</div>
				</div>
				<div className="legal">
					<p>Melissa Mondot, All Rights Reserved</p>
				</div>
			</StyledFooter>
		</>
	);
};

export default Footer;

import React from "react";
import { StyledPreviousClients } from "./PreviousClientsStyles.js";
import { Image, Row } from "../atoms";
import gli from "../../imgs/gli_home.png";
import sps from "../../imgs/sps_home.png";

const PreviousClients = () => (
	<StyledPreviousClients>
		<h3>Some previous clients:</h3>
		<Image src={gli} width={20} />
		<small>GLI Norcal Landscape Construction</small>
		<Row>

			<a
				href="https://github.com/melissa-murphy/glinorcaldev"
				target="blank"
				rel="noreferrer"
			>
				<i className="fab fa-github fa-2x"></i>
			</a>
		</Row>
		<Image src={sps} width={20} />
		<small>Sacramento Philatelic Society</small>
		<Row>

			<a
				href="https://github.com/melissa-murphy/stampSociety"
				target="blank"
				rel="noreferrer"
			>
				<i className="fab fa-github fa-2x"></i>
			</a>
		</Row>
	</StyledPreviousClients>
);

export default PreviousClients;

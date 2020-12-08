import React from "react";
import {
	Hero,
	PreviousClients,
	Introduction,
	CurrentProject,
	Skills
} from "../components";

const Home = () => {
	return (
		<>
			<Hero />
			<Introduction />
			<Skills />
			<PreviousClients />
			<CurrentProject />
			
		</>
	);
};

export default Home;

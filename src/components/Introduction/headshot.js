import React from "react";
import styled from "styled-components";
import tehMissa from "../../imgs/melissa-murphy-img.jpg";

const Headshot = () => {
	return <StyledHeadshot src={tehMissa} />;
};

export default Headshot;

const StyledHeadshot = styled.img`
	max-height: 15rem;
	width: auto;
	border-radius: 100rem;
	box-shadow: 13px 13px 15px #00000070, -13px -13px 15px #3a3a3a70;
`;

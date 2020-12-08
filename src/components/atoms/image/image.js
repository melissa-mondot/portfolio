import React from "react";
import styled from "styled-components";

const Image = ({ src, altText, ...props }) => {

	const { height, width, borderRadius, boxShadow } = props;
	return (
		<StyledImage
			src={src}
			altText={altText}
			className="image"
			height={height}
			width={width}
			borderRadius={borderRadius}
			boxShadow={boxShadow}
		/>
	);
};

const StyledImage = styled.img.attrs(props => ({
	height: props.height,
	width: props.width,
	borderRadius: props.borderRadius,
	boxShadow: props.boxShadow
}))`
	height: ${props => (props.height ? `${props.height}rem` : "100%")};
	width: ${props => (props.width ? `${props.width}rem` : `auto`)};
	border-radius: ${props =>
		props.borderRadius ? `${props.borderRadius}rem` : "10px"};
	box-shadow: ${props =>
		props.boxShadow
			? props.boxShadow
			: "3px 3px 8px midnightblue"};
`;

export default Image;

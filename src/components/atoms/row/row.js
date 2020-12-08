import React from "react";
import styled from "styled-components";

const Row = ({ ...props }) => {
	const {
		display,
		width,
		height,
		border,
		borderLeft,
		borderRight,
		borderBottom,
		borderRadiusBottomLeft,
		borderRadiusTopLeft,
		borderRadiusTopRight,
		borderRadiusBottomRight,
		boxShadow,
		backgroundColor,
		color,
		fontSize,
		margin,
		padding,
		justifyContent,
		flex,
		flexDirection,
	} = props;

	return (
		<StyledRow
			className="styled-row"
			display={display}
			width={width}
			height={height}
			border={border}
			borderLeft={borderLeft}
			borderRight={borderRight}
			borderBottom={borderBottom}
			borderRadiusBottomLeft={borderRadiusBottomLeft}
			borderRadiusTopLeft={borderRadiusTopLeft}
			borderRadiusTopRight={borderRadiusTopRight}
			borderRadiusBottomRight={borderRadiusBottomRight}
			boxShadow={boxShadow}
			backgroundColor={backgroundColor}
			color={color}
			fontSize={fontSize}
			margin={margin}
			padding={padding}
			justifyContent={justifyContent}
			flex={flex}
			flexDirection={flexDirection}
		>
			{props.children}
		</StyledRow>
	);
};

const StyledRow = styled.div.attrs((props) => ({
	actionColor: props.actionColor,
	actionBackground: props.actionBackground,
	actionOpacity: props.actionOpacity,
	backgroundColor: props.backgroundColor,
	border: props.border,
	borderLeft: props.borderLeft,
	borderTop: props.borderTop,
	borderRight: props.borderRight,
	borderBottom: props.borderBottom,
	borderRadiusBottomLeft: props.borderRadiusBottomLeft,
	borderRadiusTopLeft: props.borderRadiusTopLeft,
	borderRadiusTopRight: props.borderRadiusTopRight,
	borderRadiusBottomRight: props.borderRadiusBottomRight,
	boxShadow: props.boxShadow,
	color: props.color,
	fontSize: props.fontSize,
	justifyContent: props.justifyContent,
	height: props.height,
	margin: props.margin,
	padding: props.padding,
	width: props.width,
	href: props.href,
	display: props.display,
	flexDirection: props.column ? "column" : "row",
	textAlign: props.textAlign,
}))`
	height: ${(props) => (props.height ? `${props.height}%` : "100%")};
	width: ${(props) => (props.width ? `${props.width}%` : `100%`)};
	border: ${(props) => (props.border ? props.border : "none")};
	border-left: ${(props) => props.borderLeft};
	border-top: ${(props) => props.borderTop};
	border-right: ${(props) => props.borderRight};
	border-bottom: ${(props) => props.borderBottom};
	border-bottom-left-radius: ${(props) =>
		props.borderRadiusBottomLeft ? props.borderRadiusBottomLeft : 0};
	border-top-left-radius: ${(props) =>
		props.borderRadiusTopLeft ? props.borderRadiusTopLeft : 0};
	border-top-right-radius: ${(props) =>
		props.borderRadiusTopRight ? props.borderRadiusTopRight : 0};
	border-bottom-right-radius: ${(props) =>
		props.borderRadiusBottomRight ? props.borderRadiusBottomRight : 0};
	background-color: ${(props) =>
		props.backgroundColor ? props.backgroundColor : "transparent"};
	color: ${(props) => (props.color ? props.color : props.theme.color.primary)};
	outline: none;
	cursor: auto;
	margin: ${(props) => (props.margin ? `${props.margin}` : "0 auto")};
	padding: ${(props) => (props.padding ? `${props.margin}` : "1rem")};
	display: flex;
	/* flex-direction: ${(props) => (props.column ? "column" : "row")}; */
	flex-wrap: nowrap;
	justify-content: ${(props) =>
		props.justifyContent ? props.justifyContent : "space-around"};
	align-items: center;
	font-size: ${(props) =>
		props.fontSize ? props.fontSize : props.theme.fontSizes.small};
	text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;

export default Row;

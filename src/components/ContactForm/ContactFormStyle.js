import styled from "styled-components";

export const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 80vw;
	margin: 0 auto;
	label {
		font-family: "raleway";
		font-variant: small-caps;
		font-size: 1.25rem;
		text-align: left;
		margin-left: 0.5rem;
	}
	input {
		margin-bottom: 1rem;
		min-height: 2rem;
		border-radius: 8px;
		font-family: "raleway";
		font-variant: small-caps;
		font-size: 1.5rem;
		border: ${({ theme }) => theme.color.dark};

		:first-child {
			margin-top: 2rem;
		}
		:last-child {
			margin-top: 1.5rem;
			padding: 0.5rem 0;
			background-color: ${({ theme }) => theme.color.tertiary};
			color: white;
			font-size: 1.75rem;
			box-shadow: 13px 13px 15px #00000070, -13px -13px 15px #3a3a3a70;
		}
	}
	textarea {
		height: 10rem;
		margin-bottom: 1rem;
		font-family: "raleway";
		font-size: 1rem;
		border-radius: 8px;
		border: ${({ theme }) => theme.color.dark};
	}
`;
export const ThankYouModal = styled.div`
	transition: all 1s ease-out;
`;

export const HiddenModal = styled.div``;

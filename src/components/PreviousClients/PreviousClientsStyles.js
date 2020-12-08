import styled from "styled-components";

export const StyledPreviousClients = styled.div`
	div.styled-row {
		justify-content: center;
		i {
			/* margin: 0 1rem; */
			color: ${({ theme }) => theme.color.primary};
			box-shadow: 10px 10px 13px #00000070, -10px -10px 13px #3a3a3a70;
			border-radius: 100px;
		}
	}
`;

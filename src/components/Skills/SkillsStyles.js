import styled from "styled-components";

export const StyledSkills = styled.div`
  div {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .skill {
      height: 5rem;
      width: 5rem;
      .gauge {
        margin: 0.5rem 1.5rem;
      }
      .icon,
      small {
        margin-top: -3.15rem;
      }
    }
  }
  .bonus {
    max-width: 500px;
    margin: auto;
    display: flex;
	align-items: center;
	justify-content: center;
    img {
      padding-left: 0.25rem;
      height: 3rem;
      width: auto;
    }
  }
  .bonus-list {
    display: flex;
	flex-direction: column;

    font-size: ${({ theme }) => theme.fontSizes.small};
    max-width: 80vw;
	margin: 0 auto;
	svg {
		margin:auto;
	}
  }
`;

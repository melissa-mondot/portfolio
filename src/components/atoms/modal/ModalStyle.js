import styled from 'styled-components';

const StyledModal = styled.div`
  width: 300px;
  height: 200px;
  background-color: ${({ theme }) => theme.color.tertiary};
  margin: auto;
  color: ${({ theme }) => theme.color.dark};
  padding: 2rem;
`;

export default StyledModal;

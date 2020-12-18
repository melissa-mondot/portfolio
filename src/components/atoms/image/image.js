import styled from 'styled-components';

const Image = styled.img.attrs((props) => ({
  className: 'image',
  height: props.height,
  width: props.width,
  borderRadius: props.borderRadius,
  boxShadow: props.boxShadow,
}))`
  height: ${(props) => (props.height ? `${props.height}rem` : '100%')};
  width: ${(props) => (props.width ? `${props.width}rem` : `auto`)};
  border-radius: ${(props) => (props.borderRadius ? `${props.borderRadius}rem` : '10px')};
  box-shadow: ${(props) => (props.boxShadow ? props.boxShadow : '3px 3px 8px midnightblue')};
`;

export default Image;

import styled from 'styled-components';

const Image = styled.img.attrs((props) => ({
  className: 'image',
  height: props.height,
  width: props.width,
}))`
  height: ${(props) => (props.height ? `${props.height}rem` : '100%')};
  width: ${(props) => (props.width ? `${props.width}rem` : `auto`)};
`;

export default Image;

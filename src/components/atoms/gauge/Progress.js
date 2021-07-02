import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ProgressLayer = ({ ...props }) => {
  const { dashArray, dashOffset } = props;
  return (
    <>
      <StyledSvg
        width="61"
        height="61"
        viewBox="-30 -30 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ProgressPathStyle strokeWidth="1" fill="none" cx="0" cy="0" r="29" />

        <ProgressLayerStyle
          cx="0"
          cy="0"
          r="28"
          fill="none"
          strokeWidth="4"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform="rotate(-90)"
        />
      </StyledSvg>
    </>
  );
};

ProgressLayer.propTypes = {
  dashArray: PropTypes.number,
  dashOffset: PropTypes.number,
};

ProgressLayer.defaultProps = {
  dashArray: 0,
  dashOffset: 0,
};

const StyledSvg = styled.svg`
  vertical-align: middle;
  box-shadow: 13px 13px 15px #00000070, -13px -13px 15px #3a3a3a70;
  border-radius: 100rem;
`;

const ProgressPathStyle = styled.circle`
  width: 59rem;
  height: 60rem;
  stroke: #e6e6e6;
`;
const ProgressLayerStyle = styled.circle`
  width: 60rem;
  height: 60rem;
  stroke: ${({ theme }) => theme.color.primary};
  animation: dash 1.5s ease-in-out;
  animation-delay: 1s;
  @keyframes dash {
    from {
      stroke-dashoffset: 180;
    }
    to {
      stroke-dashoffset: dashoffset;
    }
  }
`;

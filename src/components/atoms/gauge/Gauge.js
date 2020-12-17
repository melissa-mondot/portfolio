import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProgressLayer } from './Progress';

const LiveGauge = ({ ...props }) => {
  // console.log(props);

  const { actual, goal } = props;
  const [progress, setProgress] = useState({});

  // Might be wise to use a use memo to hold previous state and compare so it doesn't need to re-render every time

  const normalizedValue = () => {
    const percent = Math.floor((actual / goal) * 100) / 100;
    return percent;
  };
  // set state w/ normalized percent value

  useEffect(() => {
    setProgress(normalizedValue());
  }, [normalizedValue]);

  const dashArray = `182.212 182.212`;

  const dashOffset = () => {
    let offset = 182.212 * (1 - progress);
    offset = offset >= 0 ? offset : 0.99;
    return offset;
  };

  return (
    <>
      <Container
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        role="progressbar"
        className="gauge"
      >
        <ProgressLayer dashArray={dashArray} dashOffset={dashOffset()} value={progress} />
      </Container>
    </>
  );
};
const Container = styled.div`
  /* position: absolute; */
`;
export default LiveGauge;

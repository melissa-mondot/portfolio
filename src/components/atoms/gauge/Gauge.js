import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { ProgressLayer } from "./Progress";
const LiveGauge = ({ ...props }) => {
  // console.log(props);

  const { actual, goal } = props;
  const [progress, setProgress] = useState({});

  //// Might be wise to use a use memo to hold previous state and compare so it doesn't need to re-render every time
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const normalizedValue = useCallback(() => {
    let percent = actual / goal;
    if (isNaN(percent)) {
      console.info(`gauge fetching user data`);
    } else if (percent < 0) {
      return 0;
    } else if (percent >= 1) {
      return 100;
    }
    return percent;
  }, [actual, goal]);
  // set state w/ normalized percent value

  useEffect(() => {
    setProgress(normalizedValue());
  }, [normalizedValue]);

  const dashArray = `182.212 182.212`;
  const dashOffset = () => {
    let offset = 182.212 * (1 - progress);
    if (isNaN(offset)) {
    } else if (offset >= 0) {
      return offset;
    } else {
      return 0.99;
    }
  }; // dash-array and dash-offset logic for svg progress path

  return (
    <>

      <Container
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        role="progressbar"
        className={"gauge"}
      >
        <ProgressLayer
          dashArray={dashArray}
          dashOffset={dashOffset()}
          value={progress}
        />
      </Container>
    </>
  );
};
const Container = styled.div`
  /* position: absolute; */
`;
export default LiveGauge;

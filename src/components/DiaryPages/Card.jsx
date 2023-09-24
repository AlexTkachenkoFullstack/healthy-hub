import React from 'react';
import TitlePeriod from "./TitlePeriod";
import FootListPeriod from "./FootListPeriod";

const PeriodСard = props => {
  return (
    <>
      <TitleDiv>
        <TitlePeriod type={props} />
      </TitleDiv>
      <FootListPeriod type={props} />
    </>
  );
};

export default PeriodСard
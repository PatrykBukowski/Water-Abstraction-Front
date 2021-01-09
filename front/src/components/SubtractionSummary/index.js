import React, { useState, useEffect } from "react";
import { userService } from "services/UserService";
import SubtractionChart from "./SubtractionChart";
import styled from "styled-components";
import colors from "utils/colors";
import InformationComponent from "components/SubtractionSummary/InformationComponent";

const S = {};
S.MainWrapper = styled.div`
  flex-basis: 500px;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;
S.ChartWrapper = styled.div`
  flex-basis: 680px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;
const SubtractionSummary = (props) => {
  const {
    user: {
      nationality,
      statistics: { avgSubtraction: average },
    },
  } = props;
  const [eurostat, setEurostat] = useState(0);

  useEffect(() =>
    userService
      .getEurostat(nationality)
      .then((user) => setEurostat(user.currentAvgSubtractionPerCapita))
  );

  return (
    <S.MainWrapper>
      <InformationComponent label="You" value={average} eurostat={eurostat} />
      <SubtractionChart
        averageUserSubtraction={average}
        eurostatSubtraction={eurostat}
      />
      <InformationComponent label="Average" value={eurostat} />
    </S.MainWrapper>
  );
};

export default SubtractionSummary;

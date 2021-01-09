import React from "react";
import { Doughnut } from "react-chartjs-2";
import colors from "../../../utils/colors";
import Styled from "styled-components";

const S = {};
S.StyledWrapper = Styled.div`
    flex-basis: calc(100% / 12 * 4);
    min-width: 0
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    overflow: auto;
    @media only screen and (max-width: 1024px){
        order: 1;
        flex-basis: 60%;
        font-size: .5em;
    }
`;
S.Heading = Styled.h2`
    font-size: 4em;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
`;

const SubtractionChart = ({ averageUserSubtraction, eurostatSubtraction }) => {
  const data = {
    datasets: [
      {
        backgroundColor: [colors.orangeWeb, colors.oxfordBlue],
        data: [averageUserSubtraction, eurostatSubtraction],
      },
    ],
  };

  return (
    <S.StyledWrapper>
      <S.Heading>WATER USE</S.Heading>
      <Doughnut
        data={data}
        options={{
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI,
          responsive: true,
          cutoutPercentage: 80,
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          tooltips: {
            enabled: false,
          },
        }}
      />
    </S.StyledWrapper>
  );
};

export default SubtractionChart;

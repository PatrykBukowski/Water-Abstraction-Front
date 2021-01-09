import React from "react";
import { Doughnut } from "react-chartjs-2";
import colors from "../../../utils/colors";
import Styled from "styled-components";

const S = {};
S.StyledWrapper = Styled.div`
    flex-basis: 680px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    /*     @media only screen and (max-width: 768px){
        order: 1;
        flex-basis: 50%;
    } */
`;
S.Heading = Styled.h2`
    font-size: 100px;
    font-weight: bold;
    margin: 20px 0;
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

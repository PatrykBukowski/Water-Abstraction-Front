import React from "react";
import Styled from "styled-components";
import Colors from "utils/colors";
const S = {};
S.StyledWrapper = Styled.div`
    flex-basis: 785px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    font-size: 64px;
/*     @media only screen and (max-width: 768px){
        order: 2;
        flex-basis: 40%;
        font-size: 32px;
    } */
`;
S.Label = Styled.p`
    margin: 0;
`;
S.Value = Styled.p`
    font-size: 2em;
    font-weight: bold;
    margin: 10px 0;
    color: ${(props) => props.isMore ? Colors.orangeWeb : Colors.black};
    transition: 1s color;
`;

const InformationComponent = (props) => {
  return (
    <S.StyledWrapper>
      <S.Label>{props.label}</S.Label>
      <S.Value isMore={props.value > props.eurostat}>
        {props.value}
      </S.Value>
    </S.StyledWrapper>
  );
};

export default InformationComponent;

import React from "react";
import { userService } from "../../services/UserService";
import { Formik } from "formik";
import Styled from "styled-components";
import colors from "../../utils/colors";

const S = {};
S.MainWrapper = Styled.div`
    width: 100%;
    background: ${colors.oxfordBlue};
    display: flex;
    justify-content: center;
    align-items: center;
`;
S.Form = Styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 1024px){
        width: 320px;
        flex-wrap: wrap;
    }
`;
S.Button = Styled.button`
    height: 50px;
    flex-basis: calc(100%/ 12 * 1);
    background: ${colors.platinum};
    border: none;
    transition: .2s background;
    font-size: 26px;
    font-weight: bold;
    margin: 25px 10px;
    :focus{
        outline: none;
        background: ${colors.orangeWeb};
    }
    :hover{
        background: ${colors.orangeWeb};
    }
    @media only screen and (max-width: 1024px){
        flex-basis: 140px;
        order: 2;
        margin: 10px 10px;
        padding: 0;
    }
`;
S.Input = Styled.input`
    height: 50px;
    flex-basis: calc((100% / 12 * 3) - 20px);
    background: ${(props) =>
      props.error[props.name] ? colors.red : colors.platinum};
    border: none;
    transition: .2s background;
    font-size: 20px;
    text-align: center;
    margin: 25px 10px;
    :focus{
        outline: none;
        background: ${colors.orangeWeb};
    }
    @media only screen and (max-width: 1024px){
        flex-basis: 360px;
        margin: 10px 10px;
    }
`;

const AddSubtraction = ({ user: { login }, reload }) => {
  return (
    <S.MainWrapper>
      <Formik
        validateOnChange={false}
        initialValues={{ taskName: "", taskValue: "" }}
        onSubmit={(values) => {
          userService
            .postSubstraction(
              login,
              values.taskName,
              parseFloat(values.taskValue)
            )
            .then((e) => {
              reload();
              values.taskName = "";
              values.taskValue = "";
            });
        }}
        validate={(values) => {
          const errors = {};
          if (!values.taskName) {
            console.log(values);
            errors.taskName = true;
          }
          if (!values.taskValue) {
            errors.taskValue = true;
          } else if (isNaN(parseFloat(values.taskValue))) {
            errors.taskValue = true;
          }
          return errors;
        }}
      >
        {({ values, errors, handleChange, handleSubmit, handleReset }) => (
          <S.Form onSubmit={handleSubmit}>
            <S.Button type="reset" onClick={handleReset}>
              RESET
            </S.Button>
            <S.Input
              type="text"
              onChange={handleChange}
              value={values.taskName}
              placeholder="Name"
              name="taskName"
              error={errors}
            />
            <S.Input
              type="text"
              onChange={handleChange}
              value={values.taskValue}
              placeholder="Value"
              name="taskValue"
              error={errors}
            />
            <S.Button type="submit">ADD</S.Button>
          </S.Form>
        )}
      </Formik>
    </S.MainWrapper>
  );
};

export default AddSubtraction;

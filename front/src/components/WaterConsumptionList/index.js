import styled from "styled-components";
import colors from "utils/colors";
import { userService } from "services/UserService";
import Moment from 'moment';

const S = {};
S.MainWrapper = styled.div`
  width: 100%;
`;
S.Ul = styled.ul`
  margin: 0;
  padding: 0;
`;
S.ListElement = styled.li`
  font-weight: ${({ header }) => (header ? "bold" : "normal")};
  font-size: ${({ header }) => (header ? "1.5em" : "1em")};
  border-bottom: ${({ header }) => (header ? "1px solid black" : "none")};
  display: flex;
  :nth-child(2n + 1) {
    background: ${colors.lightGray};
  }
`;
S.MainData = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid black;
`;
S.DataIndex = styled(S.MainData)`
  flex-basis: calc(100% / 120 * 12);
`;
S.DataValue = styled(S.MainData)`
  flex-basis: calc(100% / 120 * 32);
`;
S.DataButton = styled(S.MainData)`
  flex-basis: calc(100% / 120 * 12);
  border-right: none;
`;

const WaterConsumptionList = (props) => {
  const {
    list: { login, subtractions: subtractionList },
  } = props;
  const deleteItem = (taskId) =>
    userService.deleteSubtraction(taskId, login).then(() => props.reload());

  return (
    <S.MainWrapper>
      <S.Ul>
        <S.ListElement header>
          <S.DataIndex>#</S.DataIndex>
          <S.DataValue>Name</S.DataValue>
          <S.DataValue>Value</S.DataValue>
          <S.DataValue>Date</S.DataValue>
          <S.DataButton></S.DataButton>
        </S.ListElement>
        {subtractionList.map((element, index) => (
          <S.ListElement key={element.id}>
            <S.DataIndex>{index + 1}</S.DataIndex>
            <S.DataValue>{element.taskName}</S.DataValue>
            <S.DataValue>{element.value}</S.DataValue>
            <S.DataValue>{Moment(element.createdAt).format('D MM YYYY')}</S.DataValue>
            <S.DataButton
              onClick={() => {
                deleteItem(element.id);
              }}
            >
              Delete
            </S.DataButton>
          </S.ListElement>
        ))}
      </S.Ul>
    </S.MainWrapper>
  );
};

export default WaterConsumptionList;

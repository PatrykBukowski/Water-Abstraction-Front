import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'

const S = {}
S.MainWrapper = styled.div`
    width: 100%;
`
S.Ul = styled.ul`
    margin: 0;
    padding: 0;
`
S.ListElement = styled.li`
    font-weight: ${({ header }) => header ? "bold" : "normal"};
    font-size: ${({ header }) => header ? "1.5em" : "1em"};
    border-bottom: ${({ header }) => header ? "1px solid black" : "none"};
    display: flex;
    :nth-child(2n+1){
        background: ${colors.lightGray};
    }
`
S.MainData = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
`
S.DataIndex = styled(S.MainData)`
    flex-basis: 99px;
`
S.DataValue = styled(S.MainData)`
    flex-basis: 574px;
`
S.DataButton = styled(S.MainData)`
    flex-basis: 99px;
    border-right: none;
`

const WaterConsumptionList = ({ list: subtractionList }) => {
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
                {subtractionList.map((element, index) => <S.ListElement key={element.id}>
                    <S.DataIndex>{index + 1}</S.DataIndex>
                    <S.DataValue>{element.taskName}</S.DataValue>
                    <S.DataValue>{element.value}</S.DataValue>
                    <S.DataValue>{element.createdAt}</S.DataValue>
                    <S.DataButton>Delete</S.DataButton>
                </S.ListElement>)}
            </S.Ul>
        </S.MainWrapper>
    )
}

export default WaterConsumptionList

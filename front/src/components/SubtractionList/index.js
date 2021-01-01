import React from 'react'
import * as S from './styles';

const SubtractionList = ({ list: subtractionList }) => {
    return (
        <S.StyledWrapper>
            <S.Ul>
                {subtractionList.map((element, index) => <S.ListPosition key={element.id}>
                    <S.ListElement2>{index + 1}</S.ListElement2>
                    <S.ListElement>{element.taskName}</S.ListElement>
                    <S.ListElement>{element.value}</S.ListElement>
                    <S.ListElement>{element.createdAt}</S.ListElement>
                    <S.ListButton>usuń</S.ListButton>
                </S.ListPosition>)}
            </S.Ul>
        </S.StyledWrapper>
    )
}

export default SubtractionList

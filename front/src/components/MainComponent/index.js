import React from 'react'
import AddSubtraction from '../AddSubtarction'
import SubtractionSummary from '../SubtractionSummary'
import SubtractionList from '../SubtractionList'
import styled from 'styled-components';

const S = {}
S.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const MainComponent = props => {
    return (
        <S.Wrapper>
            <SubtractionSummary user={props.user} />
            <AddSubtraction user={props.user} reload={props.reload} />
            <SubtractionList list={props.user.subtractions} />
        </S.Wrapper>
    )
}

export default MainComponent

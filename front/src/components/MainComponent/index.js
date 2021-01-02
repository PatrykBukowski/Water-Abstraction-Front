import React from 'react'
import AddSubtraction from '../AddSubtarction'
import SubtractionSummary from '../SubtractionSummary'
import WaterConsumptionList from '../WaterConsumptionList'
import styled from 'styled-components';
import NavigationComponent from '../NavigationComponent';
import colors from '../../utils/colors'

const S = {}
S.Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    background: ${colors.platinum};
`

const MainComponent = props => {
    return (
        <S.Container>
            <NavigationComponent user={props.user} />
            <SubtractionSummary user={props.user} />
            <AddSubtraction user={props.user} reload={props.reload} />
            <WaterConsumptionList list={props.user} reload={props.reload} />
        </S.Container>
    )
}

export default MainComponent

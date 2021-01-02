import React, { useState, useEffect } from 'react'
import { userService } from '../../services/UserService'
import SubtractionChart from './SubtractionChart'
import styled from 'styled-components'
import colors from '../../utils/colors'

const S = {}
S.MainWrapper = styled.div`
    flex-basis: 500px;
    display: flex;
    justify-content: center;
    width: 100%;
`
S.Information = styled.div`
    flex-basis: 785px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
`
S.ChartWrapper = styled.div`
    flex-basis: 680px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`
S.Heading = styled.h2`
    font-size: 100px;
    font-weight: bold;
    margin: 20px 0;
`
S.Label = styled.p`
    font-size: 64px;
    margin: 0;
`
S.Value = styled.p`
    font-size: 128px;
    font-weight: bold;
    margin: 10px 0;
    color: ${(props) => props.isMoreThanEurostat ? colors.orangeWeb : colors.black};
    transition: 1s color;
`



const SubtractionSummary = props => {
    const { user: { nationality, statistics: { avgSubtraction: average } } } = props
    const [eurostat, setEurostat] = useState(0)

    useEffect(() => userService.getEurostat(nationality).then(user => setEurostat(user.currentAvgSubtractionPerCapita)))

    return (
        <S.MainWrapper>
            {/* TODO: Oddzielić komponent*/}
            <S.Information>
                <S.Label>You</S.Label>
                <S.Value isMoreThanEurostat={average > eurostat}>{average}</S.Value>
            </S.Information>
            <S.ChartWrapper>
                <S.Heading>
                    WATER USE
                </S.Heading>
                <SubtractionChart averageUserSubtraction={average} eurostatSubtraction={eurostat} />
            </S.ChartWrapper>
            <S.Information>
                <S.Label>Average</S.Label>
                <S.Value>{eurostat}</S.Value>
            </S.Information>
        </S.MainWrapper>
    )
}

export default SubtractionSummary

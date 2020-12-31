import React, { useState, useEffect } from 'react'
import { userService } from '../../services/UserService';
import SubtractionChart from './SubtractionChart';
import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width: 100%;
`
S.Information = styled.div`
    flex-basis: calc(100% / 12 * 4);
    text-align: center;
`
S.Label = styled.p`

`
S.Values = styled.p`
    font-size: 2em;
    font-weight: bold;
`
const SubtractionSummary = ({ user: { nationality, statistics: { avgSubtraction: average } } }) => {
    const [eurostat, setEurostat] = useState(0)

    useEffect(() => userService.getEurostat(nationality).then(user => setEurostat(user.currentAvgSubtractionPerCapita)))

    return (
        <S.Wrapper>
            <S.Information>
                <S.Label>Twoje zużycie</S.Label>
                <S.Values>{average}</S.Values>
            </S.Information>
            <S.Information>
                <SubtractionChart averageUserSubtraction={average} eurostatSubtraction={eurostat} />
            </S.Information>
            <S.Information>
                <S.Label>Zużycie społeczeństwa</S.Label>
                <S.Values>{eurostat}</S.Values>
            </S.Information>
        </S.Wrapper>
    )
}

export default SubtractionSummary

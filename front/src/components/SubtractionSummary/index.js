import React, { useState, useEffect } from 'react'
import { userService } from '../../services/UserService';
import SubtractionChart from './SubtractionChart';
import * as S from './styles';
const SubtractionSummary = ({ user: { nationality, statistics: { avgSubtraction: average } } }) => {
    const [eurostat, setEurostat] = useState(0)

    useEffect(() => userService.getEurostat(nationality).then(user => setEurostat(user.currentAvgSubtractionPerCapita)))

    return (
        <S.Wrapper>
            <S.Information>
                <S.Label>Twoje zużycie</S.Label>
                <S.Values isMoreThanEurostat={average>eurostat}>{average}</S.Values>
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

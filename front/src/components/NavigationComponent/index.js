import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors';
import { history } from '../../helpers/History';
import { authenticationService } from '../../services/AuthenticationService';

const S = {}
S.MainWrapper = styled.div`
    background: ${colors.oxfordBlue};
    /* flex-basis: 100px; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${colors.white};
`
S.NavigationWrapper = styled.div`
    max-width: 1320px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
S.Heading = styled.h1`
    color: ${colors.orangeWeb};
    margin: 0;
    @media only screen and (max-width: 1024px){
        display: none;
    }
`
S.Button = styled.p`
    transition: .5s color;
    font-size: 46px;
    font-weight: bold;
    margin: 20px 0;;
    :hover{
        color: ${colors.orangeWeb};
        cursor: pointer;
    }
    @media only screen and (max-width: 1024px){
        font-size: 1.5em;
    }
`

const logout = () => {
    authenticationService.logout()
    history.push('/login')
}

const NavigationComponent = props => {
    const { user } = props
    return (
        <S.MainWrapper>
            <S.NavigationWrapper>
                <S.Button onClick={() => alert("To nic nie daje")}>Hi {user.login}!</S.Button>
                <S.Heading>Water consumption calculator</S.Heading>
                <S.Button onClick={logout}>Logout</S.Button>
            </S.NavigationWrapper>
        </S.MainWrapper>
    )
}

export default NavigationComponent

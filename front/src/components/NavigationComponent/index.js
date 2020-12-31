import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors';

const Navigation = styled.div`
    background: ${colors.celadonBlue};
    height: 50px;
    display: flex;
    justify-content: space-around;
    padding: 0 30px;
    align-items: center;
    width: 100%;
    font-size: 1.5em;
    color: ${colors.white};
`

const NavigationComponent = ({ user, logout }) => {
    return (
        <Navigation>
            <div>
                <p>Hi {user.username}!</p>
            </div>
            <div>
                <p onClick={logout}>Logout</p>
            </div>
        </Navigation>
    )
}

export default NavigationComponent

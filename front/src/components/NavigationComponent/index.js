import React from 'react'
import styled from 'styled-components'

const Navigation = styled.div`
    background: #20A4F3;
    height: 50px;
    display: flex;
    justify-content: space-around;
    padding: 0 30px;
    align-items: center;
    width: 100%;
    font-size: 1.5em;
    color: #F6F7F8;
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

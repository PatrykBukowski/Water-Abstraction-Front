import styled from 'styled-components'
import colors from '../../utils/colors';

export const StyledWrapper = styled.div`
width: 100%;
`

export const Ul = styled.ul`
    padding: 0;
    margin: 0;
    color: ${colors.white};
`

export const ListPosition = styled.li`
    display: flex;
    background: ${colors.prussianBlue};
    :nth-child(2n){
        background: ${colors.celadonBlue};
    }
`

const mainElement = styled.div`
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
`

export const ListElement = styled(mainElement)`
    flex-basis: calc(100% / 12 * 3);
`

export const ListElement2 = styled(mainElement)`
    flex-basis: calc(100% / 12 * 1);
`

export const ListButton = styled(mainElement)`
    flex-basis: calc(100% / 12 * 2);
    border-right: none;
`
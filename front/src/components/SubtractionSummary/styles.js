import styled from 'styled-components'
import colors from '../../utils/colors'

export const Wrapper = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
max-width: 1000px;
width: 100%;
`
export const Information = styled.div`
flex-basis: calc(100% / 12 * 4);
text-align: center;
`
export const Label = styled.p`

`
export const Values = styled.p`
font-size: 2em;
font-weight: bold;
color: ${(props) => props.isMoreThanEurostat ? colors.imperialRed : colors.black}
`
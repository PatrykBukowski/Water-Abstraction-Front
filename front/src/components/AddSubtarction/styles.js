import styled from 'styled-components'
import colors from '../../utils/colors'

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.celadonBlue};
    font-size: 1.5em;
`

export const InputWrapper = styled.div`
    flex-basis: calc(100% / 12 * 4);
    display: flex;
    align-items: center;
    margin: 20px 0;
`

export const Label = styled.label`
    color: ${colors.white};
    flex-basis: calc(100% / 12 * 3);
    text-align: right;
`

export const Input = styled.input`
    margin: 0 10px;
    padding: 10px;
    height: 1.8em;
    border-radius: 10px;
    border: none;
    flex-basis: calc(100% / 12 * 6);

    :focus{
        outline: none;
    }
`

export const Error = styled.div`
    flex-basis: calc(100% / 12 * 3);
    color: ${colors.red};
    text-align: left;
    font-size: .8em;
`
export const ButtonWrapper = styled.div`
    flex-basis: calc(100% / 12 * 4);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button`
    width: 50%;
    height: 1.8em;
    border-radius: 10px;
    border: none;
    background: ${colors.white};
    :focus{
        outline: none;
        background: ${colors.imperialRed};
    }
`
export const StyledWrapper = styled.div`
    width: 100%;
`
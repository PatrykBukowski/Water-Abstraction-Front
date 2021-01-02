import styled from 'styled-components';
import colors from '../../../utils/colors';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
`
export const FormContainer = styled.form`
    height: calc(100%/12 * 5);
    width: calc(100%/12 * 5);
    min-height: ${(props) => props.minHeight ? props.minHeight : "400px"};
    min-width: 500px;
    background: ${colors.celadonBlue};
    color: ${colors.white};
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ErrorMessage = styled.div`
    height: .7em;
    color: ${colors.red};
    width: 50%;
`
export const ErrorParagraph = styled.p`
    font-size: 0.7em;
    margin: 0;
    padding: 5px;
`

export const Label = styled.label`
    padding: 10px 0;
`

export const Input = styled.input`
    background: ${colors.white};
    width: 50%;
    min-width: 450px;
    height: 2em;
    border-radius: 10px;
    border: none;
    font-size: 1em;
    padding-left: 10px;
    :focus{
        outline: none;
        background: ${colors.honeydew};
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    min-width: 450px;
    margin-top: calc(1em + 20px);
`
export const Button = styled.button`
    flex-basis: 48%;
    font-size: 1em;
    height: 2em;
    background: ${colors.white};
    border-radius: 10px;
    border: none;
    :focus{
        outline: none;
    }
    :hover{
        background: ${colors.honeydew};
    }
`
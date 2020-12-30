import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
`
export const FormContainer = styled.form`
    height: calc(100%/12 * 4);
    width: calc(100%/12 * 4);
    /* height: 500px; */
    /* width: 500px; */
    background: #2EC4B6;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ErrorMessage = styled.div`
    height: 1em;
    color: #ff0000;
`
export const ErrorParagraph = styled.p`
    font-size: 0.5em;
    margin: 0;
`

export const Label = styled.label`

`

export const Input = styled.input`
    width: 50%;
`
export const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
`
export const Button = styled.button`
    flex-basis: 50%;
    height: 2em;

`
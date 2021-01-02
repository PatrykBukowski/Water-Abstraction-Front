import { Formik } from 'formik'
import styled from 'styled-components'
import colors from '../../../utils/colors'

const S = {}
S.MainWrapper = styled.div`
    background: ${colors.platinum};
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
S.FormWrapper = styled.div`
    height: 600px;
    width: 1000px;
    background: ${colors.oxfordBlue};
    display: flex;
    justify-content: center;
    align-items: center;
`
S.FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
S.Input = styled.input`
    width: 320px;
    height: 50px;
    margin: 15px;
    font-size: 32px;
    border: none;
    transition: .2s background;
    background: ${(props) => props.error[props.name] ? colors.red : colors.platinum};
    :focus{
        outline: none;
        background: ${colors.orangeWeb};
    }
`
S.LoginButton = styled.button`
    width: 320px;
    height: 50px;
    margin: 15px;
    border: none;
    background: ${colors.white};
    font-size: 32px;
    font-weight: bold;
`
S.RegisterButton = styled.p`
    margin: 15px;
    font-size: 20px;
    color: ${colors.platinum};
`

const LoginComponent = props => {
    return (
        <S.MainWrapper>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values) => {
                    props.login(values.username, values.password)
                        .then(() => {
                            const { from } = props
                                || { from: { pathname: '/' } }
                            props.history.push(from)
                        })
                }}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                        errors.username = 'Required'
                    }
                    if (!values.password) {
                        errors.password = 'Required'
                    }
                    return errors;
                }}
            >
                {({
                    values,
                    errors,
                    handleChange,
                    handleSubmit,
                }) => (
                    <S.FormWrapper>
                        <S.FormContainer onSubmit={handleSubmit}>
                            <S.Input type="text" onChange={handleChange}
                                value={values.username} placeholder="Username"
                                name="username" id="username" error={errors} />
                            <S.Input type="password" name="password" error={errors}
                                onChange={handleChange} value={values.password} placeholder="Password" />
                            <S.LoginButton type="submit">LOGIN</S.LoginButton>
                            <S.RegisterButton onClick={() => props.register()}>REGISTER</S.RegisterButton>
                        </S.FormContainer>
                    </S.FormWrapper>
                )}
            </Formik>
        </S.MainWrapper>
    )
}

export default LoginComponent

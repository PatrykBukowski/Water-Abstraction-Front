import React from 'react'
import { userService } from '../../services/UserService'
import { Formik } from 'formik'
import styled from 'styled-components'
import colors from '../../utils/colors'

const S = {}
S.MainWrapper = styled.div`
    width: 100%;
    background: ${colors.oxfordBlue};
    height: 100px;
`
S.Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
S.Button = styled.button`
    height: 50px;
    width: 100px;
    margin: 0 10px;
    background: ${colors.platinum};
    border: none;
    transition: .2s background;
    font-size: 26px;
    font-weight: bold;
    :focus{
        outline: none;
        background: ${colors.orangeWeb};
    }
    :hover{
        background: ${colors.orangeWeb};
    }
    @media only screen and (max-width: 768px){
        flex-basis: calc(100% / 6 * 1);
    }
`
S.Input = styled.input`
    height: 50px;
    width: 320px;
    margin: 0 10px;
    background: ${(props) => props.error[props.name] ? colors.red : colors.platinum};
    border: none;
    transition: .2s background;
    font-size: 20px;
    text-align: center;
    :focus{
        outline: none;
        background: ${colors.orangeWeb};
    }
    @media only screen and (max-width: 768px){
        flex-basis: calc(100% / 6 * 2);
    }
`

const AddSubtraction = ({ user: { login }, reload }) => {
    return (
        <S.MainWrapper>
            <Formik
                validateOnChange={false}
                initialValues={{ taskName: '', taskValue: '' }}
                onSubmit={(values) => {
                    userService.postSubstraction(login, values.taskName, parseFloat(values.taskValue))
                        .then(e => {
                            reload()
                            values.taskName = ''
                            values.taskValue = ''
                        })
                }}
                validate={values => {
                    const errors = {}
                    if (!values.taskName) {
                        console.log(values)
                        errors.taskName = true
                    }
                    if (!values.taskValue) {
                        errors.taskValue = true
                    } else if (isNaN(parseFloat(values.taskValue))) {
                        errors.taskValue = true
                    }
                    return errors;
                }}>
                {({ values, errors, handleChange, handleSubmit, handleReset }) => (
                    <S.Form onSubmit={handleSubmit}>
                        <S.Button type="reset" onClick={handleReset}>RESET</S.Button>
                        <S.Input type="text" onChange={handleChange}
                            value={values.taskName} placeholder="Name" name="taskName" error={errors} />
                        <S.Input type="text" onChange={handleChange}
                            value={values.taskValue} placeholder="Value" name="taskValue" error={errors} />
                        <S.Button type="submit">ADD</S.Button>
                    </S.Form>
                )}
            </Formik>
        </S.MainWrapper>
    )
}

export default AddSubtraction
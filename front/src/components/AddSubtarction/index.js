import React from 'react'
import { userService } from '../../services/UserService'
import { Formik } from 'formik'
import * as S from './styles'
import styled from 'styled-components'
import colors from '../../utils/colors'

const M = {}
M.MainWrapper = styled.div`
    width: 100%;
    background: ${colors.oxfordBlue};
    height: 100px;
`
M.Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
M.Button = styled.button`
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
`
M.Input = styled.input`
    height: 50px;
    width: 320px;
    margin: 0 10px;
    background: ${colors.platinum};
    border: none;
    transition: .2s background;
    font-size: 20px;
    text-align: center;
    :focus{
        outline: none;
        background: ${colors.orangeWeb};
    }
`

const AddSubtraction = ({ user: { login }, reload }) => {
    return (
        <M.MainWrapper>
            <Formik
                validateOnChange={false}
                initialValues={{ taskName: '', value: '' }}
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
                    <M.Form onSubmit={handleSubmit}>
                        <M.Button type="reset" onClick={handleReset}>RESET</M.Button>
                        <M.Input type="text" onChange={handleChange}
                            value={values.taskName} placeholder="Name" name="taskName" />
                        <M.Input type="text" onChange={handleChange}
                            value={values.value} placeholder="Value" name="value" />
                        <M.Button type="submit">ADD</M.Button>
                        {/* <S.InputWrapper>
                        <S.Input type="text" onChange={handleChange}
                            value={values.taskName} placeholder="Task"
                            name="taskName" id="taskName" />
                        <S.Error>
                            {errors.taskName && <span>{errors.taskName}</span>}
                        </S.Error>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Input type="text" onChange={handleChange}
                            value={values.taskValue} placeholder="value"
                            name="taskValue" id="taskValue" />
                        <S.Error>
                            {errors.taskValue && <span>{errors.taskValue}</span>}
                        </S.Error>
                    </S.InputWrapper>
                    <S.ButtonWrapper>
                        <S.Button type="submit">Add</S.Button>
                    </S.ButtonWrapper> */}
                    </M.Form>
                )}
            </Formik>
        </M.MainWrapper>
    )
}

export default AddSubtraction
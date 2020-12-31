import React from 'react'
import { userService } from '../../services/UserService'
import { Formik } from 'formik'
import * as S from './styles'

const AddSubtraction = ({ user: { login }, reload }) => {
    return (
        <Formik
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
                    errors.taskName = "Required"
                }
                if (!values.taskValue) {
                    errors.taskValue = "Required"
                } else if (isNaN(parseFloat(values.taskValue))) {
                    errors.taskValue = "To nie jest liczba"
                }
                return errors;
            }}>
            {({ values, errors, handleChange, handleSubmit }) => (
                <S.Form onSubmit={handleSubmit}>
                    <S.InputWrapper>
                        <S.Label htmlFor="taskName">Task:</S.Label>
                        <S.Input type="text" onChange={handleChange}
                            value={values.taskName} placeholder="Task"
                            name="taskName" id="taskName" />
                        <S.Error>
                            {errors.taskName && <span>{errors.taskName}</span>}
                        </S.Error>
                    </S.InputWrapper>
                    <S.InputWrapper>
                        <S.Label htmlFor="taskValue">Value:</S.Label>
                        <S.Input type="text" onChange={handleChange}
                            value={values.taskValue} placeholder="value"
                            name="taskValue" id="taskValue" />
                        <S.Error>
                            {errors.taskValue && <span>{errors.taskValue}</span>}
                        </S.Error>
                    </S.InputWrapper>
                    <S.ButtonWrapper>
                        <S.Button type="submit">Add</S.Button>
                    </S.ButtonWrapper>
                </S.Form>
            )}
        </Formik>
    )
}

export default AddSubtraction
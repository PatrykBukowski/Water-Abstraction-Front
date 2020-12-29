import React from 'react'
import { userService } from '../../services/UserService'
import { Formik } from 'formik'

const AddSubtraction = ({ user: { login }, reload }) => {
    return (
        <div>
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
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="taskName">Task</label>
                        <input type="text" onChange={handleChange}
                            value={values.taskName} placeholder="Task"
                            name="taskName" id="taskName" />
                        {errors.taskName && <span>{errors.taskName}</span>}

                        <label htmlFor="taskValue">Value</label>
                        <input type="text" onChange={handleChange}
                            value={values.taskValue} placeholder="value"
                            name="taskValue" id="taskValue" />
                        {errors.taskValue && <span>{errors.taskValue}</span>}

                        <button type="submit">Add</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddSubtraction
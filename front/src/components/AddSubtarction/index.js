import React, { useState } from 'react'
import { userService } from '../../services/UserService'

const AddSubtraction = ({ user: { login }, reload }) => {
    const [substractionName, setSubstractionName] = useState("")
    const [substractionValue, setSubstractionValue] = useState("");

    const handleNameInput = ({ target: { value } }) => setSubstractionName(value)
    const handleValueInput = ({ target: { value } }) => setSubstractionValue(value)

    const hs2b = () => {
        userService.postSubstraction(login, substractionName, substractionValue)
            .then(e => {
                reload()
                setSubstractionValue("")
                setSubstractionName("")
            })
    }

    return (
        <div>
            <div>
                <input
                    value={substractionName}
                    placeholder="name"
                    onChange={handleNameInput}
                />
            </div>
            <div>
                <input
                    value={substractionValue}
                    placeholder="value"
                    onChange={handleValueInput}
                />
            </div>
            <div>
                <button
                    onClick={hs2b}>
                    Send2
                </button>
            </div>
        </div>
    )
}

export default AddSubtraction

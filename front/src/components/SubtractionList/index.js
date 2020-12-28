import React from 'react'

const SubtractionList = ({ list: subtractionList }) => {
    return (
        <div>
            <ul>
                {subtractionList.map(element => <li key={element.id}>
                    {element.taskName} :: {element.value}
                </li>)}
            </ul>
        </div>
    )
}

export default SubtractionList

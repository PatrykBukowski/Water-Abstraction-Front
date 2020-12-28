import React from 'react'

const SubtractionList = props => {
    return (
        <div>
            <ul>
            {
                props.list.map(element => <li key={element.id}>{element.taskName} :: {element.value}</li>)
            }
            </ul>
        </div>
    )
}

export default SubtractionList

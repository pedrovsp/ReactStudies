import React from 'react';

export default (props) => {
    const listItems = props.students.map(student => {
        return <li key={student.id}>{ student.name } - {student.grade }</li>
    })

    return (
        <ul>
            { listItems }
        </ul>
    )
}
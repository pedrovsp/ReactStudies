import React from 'react';
import If from '../utils/If'

export default (props) => {
    const listItems = props.students.map(student => {
        return (
            <If key={student.id} condition={(student.grade > 6)}>
                <li>{ student.name } - { student.grade }</li>
            </If>
    )})

    return (
        <ul>
            { listItems }
        </ul>
    )
}
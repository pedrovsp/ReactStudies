import React from 'react';
import If from '../utils/If'

export default (props) => {
    const listItems = props.students.map(student => {
        return (
            <If condition={(student.grade > 6)}>
                <li key={student.id}>{ student.name } - { student.grade }</li>
            </If>
    )})

    return (
        <ul>
            { listItems }
        </ul>
    )
}
import React, { useState } from 'react';
import { childrenProps } from '../utils/react-utils'
import If from '../utils/If'

export default (props) => {
    let customProps = {...props};
    const [name, setWhoCalled] = useState('')
    const [age, setCallerAge] = useState(0)

    customProps.whoCalls = (name, age) => {
        setWhoCalled(name);
        setCallerAge(age)
    }

    return (
        <div>
            <h3>Family { props.familyName }</h3>
            <If condition={name !== ''}>
                <h5>{name} called, he is {age} years old</h5>
            </If>
            { childrenProps(customProps) }
        </div>)
}
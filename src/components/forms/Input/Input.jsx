import './Input.css'
import React, { useState } from 'react'

export default props => {
    let initValue = ''

    if (props.number) {
        initValue = 1
    } else {
        initValue = 'Placholder'
    }

    const [value, setValue] = useState(initValue);

    function onChange(event) {
        if (props.number) {
            if (event.target.value.match(/\d+$/g)) {
                setValue(event.target.value);
            } else {
                return;
            }
        } else {
            setValue(event.target.value);
        }
        if (props.emitChanges) {
            props.emitChanges(event.target.value);
        }
    }

    return (
        <div>
            {props.label}: <input value={value} onChange={onChange}></input>
        </div>
    )
}
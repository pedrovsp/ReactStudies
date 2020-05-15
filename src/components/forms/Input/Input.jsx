import './Input.css'
import React, { useState } from 'react'

export default props => {
    let initValue = ''
    
    if (props.number) {
        initValue = 1
    } else {
        initValue = 'Init'
    }

    const [value, setValue] = useState(initValue);

    function onChange(event) {
        if (props.number) {
            if (event.target.value.match(/\d+$/g)) {
                setValue(event.target.value);
                if (props.emitChanges) {
                    props.emitChanges(Number(event.target.value));
                }
            } 
        } else {
            setValue(event.target.value);
            if (props.emitChanges) {
                props.emitChanges(event.target.value);
            }
        }

    }

    return (
        <div>
           Step: <input value={value} onChange={onChange}></input>
        </div>
    )
}
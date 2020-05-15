import './Input.css'
import React, { useState } from 'react'

export default props => {
    let initValue = ''
    
    if (props.number) {
        initValue = 0
    } else {
        initValue = 'Init'
    }

    const [value, setValue] = useState(initValue);

    function onChange(event) {
        if (props.number) {
            if (event.target.value.match(/\d+/g)) {
                setValue(event.target.value);
            } 
        } else {
            setValue(event.target.value);
        }
    }

    return (
        <div>
            <input value={value} onChange={onChange}></input>
        </div>
    )
}
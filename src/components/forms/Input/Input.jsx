import './Input.css'
import React, { useState } from 'react'

export default props => {
    const [value, setValue] = useState("Init");

    function onChange(event) {
        setValue(event.target.value);
    }
    return (
        <div>
            <h2>{value}</h2>
            <div>
                <input value={value} onChange={onChange}></input>
            </div>
        </div>
    )
}
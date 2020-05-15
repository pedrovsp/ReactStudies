import React from 'react';

export default (props) => {
    const age = () => Math.random() * 20 + 30
    return (
        <div>
            <span>{props.name} {props.familyName}</span>
            <button onClick={() => props.whoCalls(props.name, () => age())}>Call parent</button>
        </div>)
}
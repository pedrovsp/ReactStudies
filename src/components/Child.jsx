import React from 'react';

export default (props) => {
    return (
        <div>
            <span>{props.name} {props.familyName}</span>
            <button onClick={() => props.whoCalls(props.name)}>Call parent</button>
        </div>)
}
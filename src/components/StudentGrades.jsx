import React from 'react';

export default function(props) {
    const grade = randomNumber(props.minGrade, props.maxGrade)
    return (
        <div>
            <h5>Name: {props.name}</h5>
            <div>Grade: {grade}</div>
        </div>
    )
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
import React from 'react';

export default function(props) {
    const grade = randomNumber(props.minGrade, props.maxGrade)
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h4>Grade: {grade}</h4>
        </div>
    )
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
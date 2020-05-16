import './Button.css'
import React from 'react';

interface ButtonProps {
    type: ButtonTypes,
    text: String,
    function: any
}

export enum ButtonTypes {
    Round = 'Round',
    Square = 'Square'
}

export const Button: React.FunctionComponent<ButtonProps> = props => {

    return (
        <button className={`Button ${props.type}`} onClick={props.function}>
            {props.text}
        </button>
    )
}

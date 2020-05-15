import React from 'react';
import { childrenProps } from '../utils/react-utils'

export default (props) => {
    let customProps = {...props};
    customProps.whoCalls = (name) => {
        alert('Hello father, it is ' + name);
    }

    return (
        <div>
            <h3>Family { props.familyName }</h3>
            { childrenProps(customProps) }
        </div>)
}
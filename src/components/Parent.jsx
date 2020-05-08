import React from 'react';
import { childrenProps } from '../utils/react-utils'

export default (props) => 
        <div>
            <h1>Family { props.familyName }</h1>
            { childrenProps(props) }
        </div>
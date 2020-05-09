import React from 'react';
import { childrenProps } from '../utils/react-utils'

export default (props) => 
        <div>
            <h3>Family { props.familyName }</h3>
            { childrenProps(props) }
        </div>
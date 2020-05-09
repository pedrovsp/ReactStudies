import React from 'react';
import './Card.css';

export default (props) => {
    const styles = {
        backgroundColor: props.color,
        borderColor: props.color
    }
    return(
    <div className="Card" style={{borderColor: props.color}}>
        <div className="Header" style={styles}>
            <span className="Title">{ props.title }</span>
            <span className="Desc">{ props.desc }</span>
        </div>
        <div className="Content">
            { props.children }
        </div>
    </div>
)}
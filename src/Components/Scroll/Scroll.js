import React from 'react';
import './scroll.css';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: `4px solid rgba(0,0,0,0.2)`, height: '600px', borderRadius: '2px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;
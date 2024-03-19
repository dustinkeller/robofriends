import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid gray', height: '700px'}}>
            { props.children }
        </div>
    );
}

export default Scroll;
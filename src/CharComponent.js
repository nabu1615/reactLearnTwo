import React from 'react';

const CharComponent = (props) => {

    return (
        <p style={props.style} onClick={props.click}>{props.letter}</p>
    )
}

export default CharComponent;
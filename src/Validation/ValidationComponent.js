import React from 'react';

const ValidationComponent = (props) => {

    return (

        <div>
            <p> 
                {props.text.length >= 5 ? 'Text long enough' : 'Text too short'}
            </p>
        </div>
    )
}

export default ValidationComponent;
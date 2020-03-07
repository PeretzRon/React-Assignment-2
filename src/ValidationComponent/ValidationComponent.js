import React from 'react'

const validationComponent = props =>{

    return (
        <div>
            <p>{props.output.length > 7 ? 'Text long enough' : 'Text too short' }</p>
            <p>{props.output}</p>
        </div>
    )
};

export default validationComponent;
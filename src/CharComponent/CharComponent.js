import React from 'react';
import './CharComponent.css'

const charComponent = (props) => {
    return (
        <div onClick={props.deleteChar} className='char-component'>
            <p >{props.character}</p>
        </div>
    );
};

export default charComponent;
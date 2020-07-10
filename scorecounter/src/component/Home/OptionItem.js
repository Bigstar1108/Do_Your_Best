import React, { useState } from 'react';
import '../styles/OptionItem.scss';

const OptionItem = () => {
    const [ name, setName ] = useState("");
    const onChangeName = e => {
        setName(e.target.value);
    }
    return( 
        <div className = "ItemContainer">
            <input value = {name} onChange = {onChangeName} placeholder = "Player Name" className = "nameInput" />
        </div>
    );
}

export default OptionItem;
import React, { useState } from 'react';
import '../styles/OptionItem.scss';

const OptionItem = () => {
    const [ name, setName ] = useState("");
    const onChangeName = e => {
        setName(e.target.value);
    }
    return( 
        <div className = "ItemContainer">
            <input value = {name} onChange = {onChangeName} placeholder = "플레이어 이름을 입력해주세요" />
            <input placeholder = "시작 점수를 입력해주세요" />
            <input placeholder = "목표 점수를 입력해주세요" />
        </div>
    );
}

export default OptionItem;
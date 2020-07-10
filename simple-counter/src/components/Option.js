import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDiff } from '../actions/index';

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const dispatch = useDispatch();
    const onChange = event => {
        const {
            target : {value}
        } = event;
        if(!value){
            return;
        }
        setValue(value);
        if(value === ''){
            setValue(0);
        }
        dispatch(setDiff(parseInt(value)));
    }
    return {value, onChange};
}

const Option = () => {
    const { value, onChange } = useInput(1);
    return(
        <div>
            <input type = "text" onChange = {onChange} placeholder = "input option" />
        </div>
    );
}

export default Option;
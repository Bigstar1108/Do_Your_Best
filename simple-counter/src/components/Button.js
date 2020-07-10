import React from 'react';
import { increment, decrement } from '../actions/index';
import { useDispatch } from 'react-redux';

const Button = () => {
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick = {() => dispatch(increment())}>+</button>
            <button onClick = {() => dispatch(decrement())}>-</button>
        </div>
    );
}

export default Button;
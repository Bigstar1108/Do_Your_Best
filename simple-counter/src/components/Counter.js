import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const value = useSelector((store) => store.counter.value);
    return(
        <h1>VALUE : {value}</h1>
    );
}

export default Counter;
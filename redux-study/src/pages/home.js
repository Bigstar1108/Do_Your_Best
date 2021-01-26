import React, { useState } from 'react';
import { connect } from 'react-redux';
import { add } from '../routes/store';
import ToDoList from '../components/todoItem';

function Home({ state, addToDo }) {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(value);
        setValue('');
    };

    return (
        <>
            <h1>Todo</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={onChange} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {state.map((list) => (
                    <ToDoList text={list.text} id={list.id} key={list.id} />
                ))}
            </ul>
        </>
    );
}

const mapStateToProps = (state) => {
    return { state: state };
};

const mapDispatchToProps = (dispatch) => {
    return { addToDo: (text) => dispatch(add(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

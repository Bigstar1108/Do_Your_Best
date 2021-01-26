import React from 'react';
import { remove } from '../routes/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ToDoList = ({ text, id, deleteToDo }) => {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link> <button onClick={() => deleteToDo(id)}>DEL</button>
        </li>
    );
};

const mapDispatchToProps = (dispatch) => {
    return { deleteToDo: (id) => dispatch(remove(id)) };
};

export default connect(null, mapDispatchToProps)(ToDoList);

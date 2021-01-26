import { createStore } from 'redux';

const plus = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const ADD = 'ADD';
const MINUS = 'MINUS';

const countReducer = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

const store = createStore(countReducer);

const onChange = () => {
    number.innerText = store.getState();
};

store.subscribe(onChange);

const handleAdd = () => {
    store.dispatch({ type: ADD });
};

const handleMinus = () => {
    store.dispatch({ type: MINUS });
};

plus.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

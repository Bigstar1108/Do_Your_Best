import { createStore } from 'redux';
import { createAction, createReducer, configureStore, createSlice } from '@reduxjs/toolkit';

// const ADD_TODO = 'ADD';
// const DELETE_TODO = 'DELETE';

// const addToDo = (text) => {
//     return { type: ADD_TODO, text };
// };

// const deleteToDo = (id) => {
//     return { type: DELETE_TODO, id };
// };

// const reducer = (state = [], action) => {
//     switch (action.type) {
//         case addToDo.type:
//             const addResult = [...state, { text: action.payload, id: Date.now() }];
//             return addResult;
//         case deleteToDo.type:
//             const delResult = state.filter((list) => list.id !== action.payload);
//             return delResult;
//         default:
//             return state;
//     }
// };

// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// const reducer = createReducer([], {
//     [addToDo]: (state, action) => {
//         state.push({ text: action.payload, id: Date.now() });
//     },
//     [deleteToDo]: (state, action) => state.filter((list) => list.id !== action.payload),
// });

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => {
            state.push({ text: action.payload, id: Date.now() });
        },
        remove: (state, action) => state.filter((list) => list.id !== action.payload),
    },
});

const store = configureStore({ reducer: toDos.reducer });

// const store = createStore(reducer);

export const { add, remove } = toDos.actions;

export default store;

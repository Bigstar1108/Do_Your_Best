import { INCREMENT, DECREMENT, SET_DIFF } from '../actions/betinfo.actions';

const counterInitialState = {
    value : 0,
    diff : 1
};

const counter = (state = counterInitialState, action) => {
    switch(action.type){
        case INCREMENT:
            return Object.assign({}, state, {
                value : state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value : state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                value : action.value,
                diff : action.diff
            });
        default:
            return state;
    }
};

export default counter;
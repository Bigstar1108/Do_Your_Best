import counter from '../reducers/counter.reducer';
import betinfo from '../reducers/betinfo.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter,
    betinfo
});

export default rootReducer;
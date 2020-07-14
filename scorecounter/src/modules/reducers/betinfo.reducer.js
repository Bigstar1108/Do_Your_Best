import { SET_BET, RESET_BET } from '../actions/betinfo.actions';

const betInitialState = {
    bet : null,
    player1 : null,
    player2 : null
};

const betinfo = (state = betInitialState, action) => {
    switch(action.type){
        case SET_BET:
            return Object.assign({}, state, {
                bet : action.bet,
                player1 : action.player1,
                player2 : action.player2
            });
        case RESET_BET:
            return Object.assign({}, state, {
                bet : null,
                player1 : null,
                player2 : null
            });
        default:
            return state;
    }
};

export default betinfo;
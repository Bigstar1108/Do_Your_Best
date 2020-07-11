export const SET_BET = 'SET_BET';
export const RESET_BET = 'RESET_BET';

export function setBet(bet, player1, player2){
    return{
        type : SET_BET,
        bet : bet,
        player1 : player1,
        player2 : player2
    }
};

export function resetBet(){
    return{
        type : RESET_BET
    }
};

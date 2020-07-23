import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const SET_BET = 'betinfo/SET_BET';
export const RESET_BET = 'betinfo/RESET_BET';

type Betting = {bet: string; player1: object; player2: object;};
export const setBetting = createStandardAction(SET_BET)<Betting>();
export const resetBet = createStandardAction(RESET_BET)();
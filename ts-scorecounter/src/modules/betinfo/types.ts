import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type BetInfoAction = ActionType<typeof actions>;

export type BetInfo = {
    bet: string;
    plyaer1: object;
    player2: object;
};

export type BetInfoState = BetInfo[];
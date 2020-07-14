import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../styles/Main.scss';

const Main = () => {
    const history = useHistory();
    const data = useSelector((store) => store.betinfo);

    const [ FirstScore, setFirstScore ] = useState(parseInt(data.player1.startScore));
    const [ SecondScore, setSecondScore ] = useState(parseInt(data.player2.startScore));
    const [ FirstBet, setFirstBet ] = useState("");
    const [ SecondBet, setSecondBet ] = useState("");

    const onChangeFirstBet = e => {
        setFirstBet(e.target.value);
    }

    const onChangeSecondBet = e => {
        setSecondBet(e.target.value);
    }

    const onClickFirstBet = (type) => {
        switch(type){
            case 'increment':
                const FirstScore_ = FirstScore + parseInt(FirstBet);
                setFirstScore(FirstScore_);
                checkBet('increment', data.player1, FirstScore_, parseInt(data.player1.endScore));
                return null;
            case 'decrement':
                const FirstScore__ = FirstScore - parseInt(FirstBet);
                setFirstScore(FirstScore__);
                checkBet('decrement', data.player1, FirstScore__, parseInt(data.player1.endScore));
                return null;
            default:
                return null;
        }
    }

    const onClickSecondBet = (type) => {
        switch(type){
            case 'increment':
                const SecondScore_ = SecondScore + parseInt(SecondBet);
                setSecondScore(SecondScore_);
                checkBet('increment', data.player2, SecondScore_, parseInt(data.player2.endScore));
                return null;
            case 'decrement':
                const SecondScore__ = SecondScore - parseInt(SecondBet);
                setSecondScore(SecondScore__);
                checkBet('decrement', data.player2, SecondScore__, parseInt(data.player2.endScore));
                return null;
            default:
                return null;
        }
    }

    const checkBet = (type, player, firstScore, endScore) => {
        const startScore_ = player.startScore;
        const endScore_ = player.endScore;
        switch(type){
            case 'increment':
                if(startScore_ < endScore_){
                    if(firstScore >= endScore){
                        alert(`${player.name}님이 이겼습니다. 패배자는 ${data.bet}을(를) 수행해주세요.`);
                        history.push('/');
                    }
                }else{
                    return null;
                }
                return null;
            case 'decrement':
                if(startScore_ > endScore_){
                    if(firstScore <= endScore){
                        alert(`${player.name}님이 이겼습니다. 패배자는 ${data.bet}을(를) 수행해주세요.`);
                        history.push('/');
                    }
                }else{
                    return null;
                }
                return null;
            default:
                return null;
        }
    }

    return(
        <div className = "MainContainer">
            <div className = "MainBox">
                <div className = "MainTopBox">
                    <span>벌칙: {data.bet}</span>
                </div>

                <div className = "MainBottomBox">
                    <div className = "PlayerBox">
                        <div className = "InfoBox">
                            <span>Player Name : {data.player1.name}</span>
                            <span>시작 점수 : {data.player1.startScore}</span>
                            <span>목표 점수 : {data.player1.endScore}</span>
                        </div>

                        <div className = "CounterBox">
                            <span>{FirstScore}</span>
                            <div className = "BetBox">
                                <input value = {FirstBet} onChange = {onChangeFirstBet} placeholder = "점수를 입력하세요" />
                                <button onClick = {() => onClickFirstBet('increment')} >+</button>
                                <button onClick = {() => onClickFirstBet('decrement')}>-</button>
                            </div>
                        </div>
                    </div>

                    <div className = "PlayerBox">
                        <div className = "InfoBox">
                            <span>Player Name : {data.player2.name}</span>
                            <span>시작 점수 : {data.player2.startScore}</span>
                            <span>목표 점수 : {data.player2.endScore}</span>
                        </div>

                        <div className = "CounterBox">
                            <span>{SecondScore}</span>
                            <div className = "BetBox">
                                <input value = {SecondBet} onChange = {onChangeSecondBet} placeholder = "점수를 입력하세요" />
                                <button onClick = {() => onClickSecondBet('increment')}>+</button>
                                <button onClick = {() => onClickSecondBet('decrement')}>-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
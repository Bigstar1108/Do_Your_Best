import React, { useState } from 'react';
import '../styles/Home.scss';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [ bet, setBet ] = useState("");
    const [ player1, setPlayer1 ] = useState({name : "", startScore : null, endScore : null});
    const [ player2, setPlayer2 ] = useState({name : "", startScore : null, endScore : null});
    const dispatch = useDispatch();
    
    //벌칙 적는 input 함수
    const onChangeBet = e => {
        setBet(e.target.value);
    }

    const onChangePlayer1 = e => {
        const { name, value } = e.target;
        setPlayer1(prevState => ({
            ...prevState,
            [name] : value
        }));
    };

    const onChangePlayer2 = e => {
        const { name, value } = e.target;
        setPlayer2(prevState => ({
            ...prevState,
            [name] : value
        }));
    }

    const onClick = () => {
        const checkBet = bet === "";
        const checkPlayer1 = player1.name === "" || player1.startScore === null || player1.endScore === null;
        const checkPlayer2 = player2.name === "" || player2.startScore === null || player2.endScore === null;
        if(checkBet || checkPlayer1 || checkPlayer2){
            alert("빈 칸을 모두 채워주세요!");
        }else{
            
        }
    }

    return(
        <div className = "Container">
            <div className = "OptionBox">
                <div className = "TopOptionBox">
                    <p>ScoreCounter입니다.<br />1대1 점수를 메길 때 사용하세요!<br />원하는 벌칙을 정해보세요!</p>
                    <input className = "BetInput" onChange = {onChangeBet} value = {bet} placeholder = "원하는 벌칙을 적어주세요!" />
                </div>

                <div className = "BottomOptionBox">
                    <div className = "OptionItem">
                        <p>Player1</p>
                        <input className = "playerInput" placeholder = "사용자 이름을 입력해주세요" name = "name" value = {player1.name} onChange = {onChangePlayer1} />
                        <input className = "playerInput" placeholder = "시작할 값을 입력해주세요.(숫자만 가능)" type = "number" name = "startScore" value = {player1.startScore} onChange = {onChangePlayer1} />
                        <input className = "playerInput" placeholder = "목표 값을 입력해주세요.(숫자만 가능)" type = "number" name = "endScore" value = {player1.endScore} onChange = {onChangePlayer1} />
                    </div>

                    <div className = "OptionItem">
                        <p>Player2</p>
                        <input className = "playerInput" placeholder = "사용자 이름을 입력해주세요" name = "name" value = {player2.name} onChange = {onChangePlayer2} />
                        <input className = "playerInput" placeholder = "시작할 값을 입력해주세요.(숫자만 가능)" type = "number" name = "startScore" value = {player2.startScore} onChange = {onChangePlayer2} />
                        <input className = "playerInput" placeholder = "목표 값을 입력해주세요.(숫자만 가능)" type = "number" name = "endScore" value = {player2.endScore} onChange = {onChangePlayer2} />
                    </div>
                </div>

                <div className = "OptionButtonBox">
                    <button onClick = {onClick}>자강두천 1대1 하러가기</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
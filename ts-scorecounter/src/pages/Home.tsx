import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Home.scss';

const Home = () => {
    const [ bet, setBet ] = useState<string>("");

    const [ player1, setPlayer1 ] = useState({name : "", startScore : "", endScore : ""});
    const [ player2, setPlayer2 ] = useState({name : "", startScore : "", endScore : ""});

    const history = useHistory();

    type InputEvent = React.ChangeEvent<HTMLInputElement>;
    const onChangePlayer1 = (e: InputEvent): void => {
        const { name, value } = e.target;
        setPlayer1({
            ...player1,
            [name] : value
        })
    };
    const onChangePlayer2 = (e: InputEvent): void => {
        const { name, value } = e.target;
        setPlayer2({
            ...player2,
            [name] : value
        })
    };

    type SubmitEvent = React.FormEvent<HTMLFormElement>;
    const handleSubmit = (e: SubmitEvent): void => {
        e.preventDefault();
        const checkBet = bet === "";
        const checkPlayer1 = player1.name === "" || player1.startScore === "" || player1.endScore === "";
        const checkPlayer2 = player2.name === "" || player2.startScore === "" || player2.endScore === "";
        if(checkBet || checkPlayer1 || checkPlayer2){
            alert("빈 칸을 모두 채워주세요!");
        }else{
            history.push("/main");
        }
    }

    return(
        <div className = "Container">
            <form className = "OptionBox" onSubmit = {handleSubmit}>
                <div className = "TopOptionBox">
                    <p>ScoreCounter입니다.<br />1대1 점수를 메길 때 사용하세요!<br />원하는 벌칙을 정해보세요!</p>
                    <input className = "BetInput" 
                        value = {bet}
                        placeholder = "원하는 벌칙을 적어주세요!"
                        onChange = {e => setBet(e.target.value)}
                    />
                </div>

                <div className = "BottomOptionBox">
                    <div className = "OptionItem">
                        <p>Player1</p>
                        <input className = "playerInput" name = "name" value = {player1.name} onChange = {onChangePlayer1} placeholder = "사용자 이름을 입력해주세요" />
                        <input className = "playerInput" name = "startScore" value = {player1.startScore} onChange = {onChangePlayer1} placeholder = "시작할 값을 입력해주세요.(숫자만 가능)" />
                        <input className = "playerInput" name = "endScore" value = {player1.endScore} onChange = {onChangePlayer1} placeholder = "목표 값을 입력해주세요.(숫자만 가능)" />
                    </div>

                    <div className = "OptionItem">
                        <p>Player2</p>
                        <input className = "playerInput" name = "name" value = {player2.name} onChange = {onChangePlayer2} placeholder = "사용자 이름을 입력해주세요" />
                        <input className = "playerInput" name = "startScore" value = {player2.startScore} onChange = {onChangePlayer2} placeholder = "시작할 값을 입력해주세요.(숫자만 가능)"  />
                        <input className = "playerInput" name = "endScore" value = {player2.endScore} onChange = {onChangePlayer2} placeholder = "목표 값을 입력해주세요.(숫자만 가능)"  />
                    </div>
                </div>

                <div className = "OptionButtonBox">
                    <button type = "submit">자강두천 1대1 하러가기</button>
                </div>
            </form>
        </div>
    );
}

export default Home;
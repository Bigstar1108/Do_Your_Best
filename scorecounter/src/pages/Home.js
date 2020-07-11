import React, { useState } from 'react';
import OptionItem from '../component/Home/OptionItem';
import '../styles/Home.scss';

const Home = () => {
    const [ bet, setBet ] = useState("");

    //벌칙 적는 input 함수
    const onChangeBet = e => {
        setBet(e.target.value);
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
                        <OptionItem />
                    </div>
                    <div className = "OptionItem">
                        <OptionItem />
                    </div>
                </div>

                <div className = "OptionButtonBox">
                    <button>자강두천 1대1 하러가기🤜🤛</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
import React from 'react';
import OptionItem from '../component/Home/OptionItem';
import '../styles/Home.scss';

const Home = () => {
    return(
        <div className = "Container">
            <div className = "OptionBox">
                <div className = "OptionItem">
                    <OptionItem />
                </div>
                <div className = "OptionItem"></div>
            </div>
        </div>
    );
}

export default Home;
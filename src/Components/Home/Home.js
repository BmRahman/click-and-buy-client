import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Featured from './Featured/Featured';
import Pay from './Pay/Pay';
import Sell from './Sell/Sell';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Featured></Featured>
            <Sell></Sell>
            <Pay></Pay>
        </div>
    );
};

export default Home;
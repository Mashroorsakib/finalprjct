import React from 'react';
import  Toppart from'../Toppart/Toppart'
import Middlepart from '../Middlepart/Middlepart'
import Loadreview from '../Review/Loadreview';
import Youtube from '../Review/Youtube/Youtube';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
        <Toppart></Toppart>
        <Middlepart></Middlepart>
        <Loadreview></Loadreview>
        <Youtube></Youtube>
        <Footer></Footer>
        </div>
    );
};

export default Home;
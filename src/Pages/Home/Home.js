import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Parts from './Parts/Parts';
import Summery from './Summery';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-5 lg:px-12'>
            <Categories></Categories>
            <Parts></Parts>
            
            </div>
            <Summery></Summery>
        </div>
    );
};

export default Home;
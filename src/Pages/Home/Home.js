import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import OurBenifits from './OurBenifits';
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
            <div className='px-5 lg:px-12'>
            <OurBenifits></OurBenifits>
            </div>
            
        </div>
    );
};

export default Home;
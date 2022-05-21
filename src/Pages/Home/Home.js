import React from 'react';
import Banner from './Banner';
import Parts from './Parts/Parts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='px-5 lg:px-12'>
            <Parts></Parts>
            </div>
        </div>
    );
};

export default Home;
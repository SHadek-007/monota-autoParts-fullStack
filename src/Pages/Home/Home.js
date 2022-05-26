import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Categories from './Categories';
import OurBenifits from './OurBenifits';
import Parts from './Parts/Parts';
import Reviews from './Reviews';
import Summery from './Summery';


const Home = () => {
    const [reviewList, setReviewList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
          .then((res) => res.json())
          .then((data) => setReviewList(data));
      }, []);

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
            <div className='px-5 lg:px-12'>
                <h2 className='text-2xl text-center font-semibold'>Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    reviewList.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }
            </div>
            </div>
            
        </div>
    );
};

export default Home;
import React from "react";
import summery from '../../assets/summery-bg.webp';
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { faUsersLine } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Summery = () => {
  return (
    <div className="max-h-sm lg:max-h-lg my-16 py-20" style={{backgroundImage:`url(${summery})`, backgroundSize:'cover'}}>
        <h2 className="text-3xl md:text-5xl text-warning text-center uppercase font-bold">Millions Business Trust Us</h2>
        <h4 className="text-xl md:text-3xl text-warning text-center uppercase mt-3">Try To Understand User Expectation</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-12">
            <div className="text-warning">
                <div className="text-center py-2 md:py-0 lg:py-0 border border-primary md:border-hidden lg:border-hidden">
                <FontAwesomeIcon icon={faFlagUsa}  className='text-5xl'/>
                <h2 className="text-4xl font-bold mt-7 mb-2">72</h2>
                <p className="text-xl">Countries</p>
            </div>
        </div>
            <div className="text-warning">
                <div className="text-center py-2 md:py-0 lg:py-0 border border-primary md:border-hidden lg:border-hidden">
                <FontAwesomeIcon icon={faRectangleList}  className='text-5xl'/>
                <h2 className="text-4xl font-bold mt-7 mb-2">535 +</h2>
                <p className="text-xl">Complete Projects</p>
            </div>
        </div>
        <div className="text-warning">
            <div className="text-center py-2 md:py-0 lg:py-0 border border-primary md:border-hidden lg:border-hidden">
                <FontAwesomeIcon icon={faUsersLine}  className='text-5xl'/>
                <h2 className="text-4xl font-bold mt-7 mb-2">273 +</h2>
                <p className="text-xl">Happy Clients</p>
            </div>
        </div>
            <div className="text-warning">
                <div className="text-center py-2 md:py-0 lg:py-0 border border-primary md:border-hidden lg:border-hidden">
                    <FontAwesomeIcon icon={faMessage}  className='text-5xl'/>
                    <h2 className="text-4xl font-bold mt-7 mb-2">432 +</h2>
                    <p className="text-xl">Feedbacs</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Summery;

import React from 'react';
import { achievementSection } from '../../portfolio';
import { underConstruction } from '../../assets';
import Lottie from 'lottie-react';

const Achievments = () => {
    return (
        <div className='container mx-auto mt-10 px-2 h-screen' >
            <div className='text-start ' >
                <h1 className='text-2xl md:text-4xl lg:6xl my-10 flex' > {achievementSection.title} </h1>
                {/* <h2 className='text-gray-600 text-1xl lg:text-2xl'> {achievementSection.subtitle} </h2> */}
            </div>

            <div class='sm:w-1/2 mx-auto sm:mx-10'>
                <div className=''>
                    <Lottie animationData={underConstruction} loop={true}></Lottie>

                </div>

            </div>
        </div>
    );
};

export default Achievments;
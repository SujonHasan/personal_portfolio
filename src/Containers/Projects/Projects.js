import React from 'react';
import { projectSection } from '../../portfolio';
import Lottie from 'lottie-react';
import { underConstruction } from '../../assets';

const Projects = () => {
    return (
        <div className='container mx-auto mt-10 px-2 h-screen' >
            <div className='text-start ' >
                <h1 className='text-2xl md:text-4xl lg:6xl my-10 flex' > {projectSection.title} </h1>
            </div>

            <div class='sm:w-1/2 mx-auto sm:mx-10'>
                <div className=''>
                    <Lottie animationData={underConstruction} loop={true}></Lottie>
                </div>
            </div>

        </div>
    );
};

export default Projects;
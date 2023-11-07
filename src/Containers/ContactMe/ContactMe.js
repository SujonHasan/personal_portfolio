import React from 'react';
import { contactMe} from '../../portfolio';
import { email } from '../../assets';
import Lottie from 'lottie-react';
import SocialMedia from '../../Components/socialMedia/SocialMedia';


const ContactMe = () => {
    return (
        <div className='container mx-auto sm:flex mt-10 h-screen '>
            <div className='justify-start text-start px-5 sm:w-1/2'>
                
                <h1 className='text-6xl font-thin sm:text-4xl lg:text-7xl font-bold mt-10'> {contactMe.title} </h1>
                <p className='text-gray-600 text-1xl my-10' > {contactMe.subTitle} </p>
        
                <a href={`mailto:${contactMe.mail}`} className='text-4xl cursor-pointer font-mono text-gray-600 my-10' > {contactMe.mail} </a>

                <SocialMedia />
            </div>

            <div className='sm:w-1/2'>
                <div className=''>
                    <Lottie animationData={email} loop={true}></Lottie>
                </div>

            </div>
        </div>
    );
};

export default ContactMe;
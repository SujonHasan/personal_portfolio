import React from 'react';
// import landingPerson from '../../assets/lottie/landingPerson.json';
import { landingPerson } from "../../assets/index";
import Lottie from 'lottie-react';
import { greeting} from '../../portfolio';
import SocialMedia from '../../Components/socialMedia/SocialMedia';
import {
    FaFileDownload,
} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
    if (!greeting.displayGreeting) return null;
    return (
        <div className='container mx-auto sm:flex mt-10'>
            <div className='mb-5 sm:w-1/2 px-3 py-2 sm:p-0 text-start'>
                <h1 className='font-serif text-6xl sm:text-4xl lg:text-7xl font-bold'> {greeting.title1}</h1>
                <h1 className='font-serif text-6xl sm:text-4xl lg:text-7xl font-bold flex'> {greeting.title2}  </h1>


                <p className='my-10 text-gray-600 text-1xl lg:text-3xl'>{greeting.SubTitle}</p>
                
                <SocialMedia></SocialMedia>

                <div className='mt-10 flex gap-5 text-white '>

                    <button className='bg-gray-500 py-3 px-5 rounded-full hover:bg-green-400 hover:text-black'>
                        <Link className='text-1xl' to="/contact">Contact Me</Link>
                    </button>

                    <button className='bg-gray-500 py-3 px-5 rounded-full hover:bg-green-400 hover:text-black'>
                        <a
                            className="text-decoration-none flex text-1xl"
                            href={greeting.resumeLink}
                            download={true}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaFileDownload className="me-2 mt-1" />
                            <p>Resume</p>
                        </a>
                    </button>




                </div>

            </div>
            <div class='sm:w-1/2 mx-auto sm:mx-10'>
                <div className=''>
                    <Lottie animationData={landingPerson} loop={true}></Lottie>

                </div>

            </div>
        </div>
    );
};

export default Home;
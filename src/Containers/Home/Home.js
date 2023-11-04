import React from 'react';
import landingPerson from '../../assets/lottie/landingPerson.json';
import Lottie from 'lottie-react';
import { greeting, socialMediaLinks } from '../../portfolio';
// import socialMedia from '../../Components/socialMedia/socialMedia';
import {
    FaFacebook,
    FaFileDownload,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from 'react-router-dom';

const Home = () => {
    if (!greeting.displayGreeting) return null;
    return (
        <div className='container mx-auto sm:flex mt-10'>
            <div className='mb-5 sm:w-1/2 px-3 py-2 sm:p-0 text-start'>
                <h1 className='text-6xl sm:text-4xl lg:text-7xl font-bold'> {greeting.title1}</h1>
                <h1 className='text-6xl sm:text-4xl lg:text-7xl font-bold'> {greeting.title2} </h1>

                <p className='my-10 text-gray-600 text-1xl lg:text-3xl'>{greeting.SubTitle}</p>
                {/* <socialMedia /> */}

                <div className='flex gap-5  mx-auto'>
                    <a href={socialMediaLinks.github}
                        rel="noreferrer"
                        target="_blank"
                        className="hover:bg-black hover:rounded-full text-3xl"
                    >
                        <FaGithub></FaGithub>
                    </a>
                    <a href={socialMediaLinks.linkedin}
                        rel="noreferrer"
                        target="_blank"
                        className="text-blue-800 hover:text-black text-3xl"
                    >
                        <FaLinkedin></FaLinkedin>
                    </a>
                    <a href={socialMediaLinks.facebook}
                        rel="noreferrer"
                        target="_blank"
                        className=" text-primary text-3xl hover:text-black"
                    >
                        <FaFacebook></FaFacebook>
                    </a>
                    <a href={socialMediaLinks.gmail}
                        rel="noreferrer"
                        target="_blank"
                        className="text-red-600 hover:text-black text-3xl"
                    >
                        <SiGmail></SiGmail>
                    </a>
                </div>

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
                <div>
                    <Lottie animationData={landingPerson} loop={true}></Lottie>

                </div>

            </div>
        </div>
    );
};

export default Home;
import React from 'react';

import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { socialMediaLinks } from '../../portfolio';

export default function SocialMedia() {
    return (
        <div className='flex gap-5  mx-auto mt-5'>
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
                    <a href={`mailto:${socialMediaLinks.gmail}`}
                        rel="noreferrer"
                        target="_blank"
                        className="text-red-600 hover:text-black text-3xl"
                    >
                        <SiGmail></SiGmail>
                    </a>
                </div>
    );
};

// export default socialMedia;
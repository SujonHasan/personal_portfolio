import React from 'react';
import { skillsSection } from '../../portfolio';
import codingPerson from "../../assets/lottie/codingPerson.json";
import Lottie from 'lottie-react';
import softwareSkill from '../../Components/softwareSkills/softwareSkill';

const Skills = () => {

    if (!skillsSection.display) return null;

    return (
        <div className='container mx-auto sm:flex mt-10'>
            <div className='order-2 sm:order-1 sm:w-1/2'>
                <Lottie animationData={codingPerson} loop={true} ></Lottie>
            </div>
            <div className='order-1 sm:order-2 sm:w-1/2 text-start px-2 py-5 sm:p-0'>
                <h1 className='text-4xl font-bold text-center'>SKills</h1>

                <h2 className='text-gray-600 my-5'> {skillsSection.subTitle} </h2>

                <div>
                    <ul className='flex flex-wrap gap-5 text-gray-400'>
                        {
                            skillsSection.softwareSkills.map((skills, i) => {
                                return(
                                    <li key={i}>
                                        <i className= {skills.fontAwesomeClassname} ></i>
                                        <p> {skills.skillName} </p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='text-gray-600 my-10'>
                    <h2 className='text-2xl'> {skillsSection.title} </h2>
                    {skillsSection.skills.map((skill, i) => {

                        return (
                            <p key={i} className='flex gap-5 my-4'>
                                {skill}
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Skills;
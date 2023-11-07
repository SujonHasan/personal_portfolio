import { skillsSection } from "../../portfolio";

import React from 'react';

const SoftwareSkill = () => {
    return (
        <div>
            <ul className='flex flex-wrap gap-5 text-gray-400'>
                {
                    skillsSection.softwareSkills.map((skills, i) => {
                        return (
                            <li key={i}>
                                <i className={skills.fontAwesomeClassname} ></i>
                                <p> {skills.skillName} </p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default SoftwareSkill;
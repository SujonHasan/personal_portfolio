import React from 'react';
import { problemSolving } from '../../portfolio';


const ProblemSolving = () => {
    return (
        <div className='container mx-auto mt-10 px-2'>
            <div className='text-start my-10'>
                <h1 className='text-3xl md:text-6xl my-10'> {problemSolving.title} </h1>
                <h2 className='text-gray-600' > {problemSolving.subTitle} </h2>
            </div>

            <div >
                <ul className='flex flex-wrap gap-5 justify-center'>
                    {problemSolving.site.map((value, i) => {
                        return (
                            <li className=''>
                                <div className="card card-compact w-96 h-96 bg-base-100 shadow-xl p-5">
                                    <figure className='h-48' ><img src={value.icon} alt={value.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title justify-center">{value.title}</h2>
                                        <p className='text-gray-600'>{value.subTitle}</p>
                                        <div className="card-actions justify-center">
                                            <button className="px-5 py-2 rounded-full bg-slate-400"> <a href={value.link}> {value.name}</a> </button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>


        </div>
    );
};

export default ProblemSolving;
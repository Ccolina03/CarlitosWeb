import React from 'react';
import Heading from '../Heading';
import UAlberta from '../../gallery/icon-ualberta.svg'
import './Experiences.css'
const Experiences = () => {
    return (
        <div className='flex flex-col items-center gap-16 '>
            <Heading className="text-4xl" size='h1'>My Work Experience</Heading>
            <div className='experience-container flex justify-center'>
                <div className='timeline w-28 bg-gray-800 flex flex-col items-center'>
                    <div className='line1 w-0.5 bg-gray-100 h-36'></div>
                    <div className=' circle1 relative overflow-visible flex justify-center items-center rounded-full border-2 border-white h-28 w-full hover:bg-green '>
                         <img src={UAlberta} alt='UAlberta icon'></img>
                         <div className='job1 px-10 py-8 absolute rounded-[25px] w-[50vw]'>
                                <Heading className='text-white font-extrabold' size='h3'>SWE Intern</Heading>
                                <Heading className='mt-3 text-[#905EFF] font-extrabold' size='h5'>Litespace</Heading>
                                <ul className='mt-6 text-white list-disc xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl leading-9'>
                                    <li>
                                        FrontEnd development
                                    </li>
                                    <li>
                                        Storybook implementation + NEST.JS backend migration to microservices
                                    </li>
                                    <li>
                                        Microservice architecture for File System, Events and Office
                                    </li>
                                </ul>
                               
                        </div>
                    </div>
                    <div className='line1 w-0.5 bg-gray-100 h-96'></div>
                    <div className='circle1 flex items-center justify-center rounded-full border-2 border-white h-28 w-full hover:bg-green'>
                        <img src={UAlberta} alt='UAlberta icon'></img>
                    </div>
                    <div className='line1 w-0.5 bg-gray-100 h-96'></div>
                    <div className='circle1 flex justify-center items-center rounded-full border-2 border-white h-28 w-full hover:bg-green'>
                        <img src={UAlberta} alt='UAlberta icon'></img>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Experiences;

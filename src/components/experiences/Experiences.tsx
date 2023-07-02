import React from 'react';
import Heading from '../Heading';
import UAlberta from '../../gallery/icon-ualberta.svg'

const Experiences = () => {
    return (
        <div className='flex flex-col items-center gap-16 '>
            <Heading className="text-4xl" size='h1'>My Work Experience</Heading>
            <div className='experience-container flex justify-center'>
                <div className='timeline w-28 bg-gray-800 flex flex-col items-center'>
                    <div className='line1 w-0.5 bg-gray-100 h-36'></div>
                    <div className='circle1 rounded-full border-2 border-white h-28 w-full'></div>
                    <div className='line1 w-0.5 bg-gray-100 h-96'></div>
                    <div className='circle1 rounded-full border-2 border-white h-28 w-full hover:bg-green'>
                        <img src={UAlberta} alt='UAlberta icon'></img>
                    </div>
                    <div className='line1 w-0.5 bg-gray-100 h-96'></div>
                    <div className='circle1 rounded-full border-2 border-white h-28 w-full'></div>
                </div> 
            </div>
        </div>
    )
}

export default Experiences;

import React from 'react';
import Heading from './Heading';

const Card = () => {
    return (
        <div className="grid sm:grid-cols-1  md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
            <div className='flex flex-col group cursor-pointer bg-gray-100 rounded-lg'> 
                <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200-ease-out">
                <Heading className='w-full' size="h3">Proyect1</Heading>
                <Heading className='w-full' size="h5">STACK: React | Next.js</Heading>
                </div>
            </div>
        </div>
    )
}

export default Card;
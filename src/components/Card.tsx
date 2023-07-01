import React from 'react';
import Heading from './Heading';
import UPrintI from '../gallery/Screenshot 2023-04-02 174506.png'
import Carlos from '../gallery/Screenshot_20230125_115845.png'

const Card = () => {
    return (
        <div className='flex flex-col gap-10 gap-y-20 group cursor-pointer bg-gray-100 rounded-lg inset-0'> 
            <div className="relative h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200-ease-out">
                <img className='object-contain w-ful h-full object-left lg:object-center' src={UPrintI} alt='UPrintI'></img>
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-6 flex justify-between'>
                    <div>
                        <p className='font-bold'>UPrintI</p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Card;
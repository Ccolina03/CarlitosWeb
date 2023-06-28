import React from 'react';
import Heading from '../components/Heading';
import backgroundImage from '../gallery/Rectangle 9.png'
import Button from './Button';
import githubIcon from '../gallery/github-3d 2.png'
import deskIcon from '../gallery/desk 2.png'
import reactIcon from '../gallery/react-3d 1.png'
import Carlos from '../gallery/Screenshot_20230125_115845.png'


const Introduction = () => {
    return (
        <div className='flex justify-around items-center sm:flex-col'>
        <div className="flex-col space-y-5 ml-16 mt-16 flex-1/4" >
                <Heading className = 'animate-bounce text-white' size='h1'>Carlos <span>👋🏾</span></Heading>
            <div>
                <Heading size='h5'>I am a Computer Engineering Coop student from University of Alberta.
                Currently interning at <strong>Litespace</strong> and the <strong>University of Alberta</strong> as a Digital Marketing QA</Heading>
            </div>
        </div>
        <div className='flex-1/4 items-center m-16 sm:m-4'>
            <img className="object-cover rounded-lg w-50 h-80 sm:w-auto md:w-auto" src={Carlos} alt="Carlos Picture"></img>
        </div>
       
        
    </div>
    )
}

export default Introduction;
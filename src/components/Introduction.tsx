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
        <div className='flex flex-col lg:flex-row md:flex-row'> 
        <div className="flex-col space-y-5 ml-16 mt-16" >
                <Heading className = 'w-30 animate-bounce text-white lg:' size='h1'>
                    Carlos Colina <span>👋🏾</span>
                </Heading>
            <div >
                <Heading className='' size='h5'>I am a Computer Engineering Coop student from University of Alberta.
                Currently interning at <strong>Litespace</strong> and the <strong>University of Alberta</strong> as a Digital Marketing QA</Heading>
            </div>
        </div>
        <div className='flex justify-center flex-shrink-0 items-center m-16 w-50 h-80'>
            <img className="object-contain rounded-lg w-auto h-full" src={Carlos} alt="Carlos Picture"></img>
        </div>
        </div>
        
    )
}

export default Introduction;
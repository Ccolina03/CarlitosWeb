import React from 'react';
import Heading from '../components/Heading';
import backgroundImage from '../gallery/Rectangle 9.png'
import Button from './Button';
import githubIcon from '../gallery/github-3d 2.png'
import deskIcon from '../gallery/desk 2.png'
import reactIcon from '../gallery/react-3d 1.png'
import Carlos from './Carlos'

const Introduction = () => {
    return (
        <div className='flex flex-col lg:flex-row md:flex-row'> 
        <div className="flex flex-col space-y-5 ml-16 mt-5" >
                <Heading className = 'text-5xl animate-bounce' size='h1'>
                    Carlos Colina <span>👋🏾</span>
                </Heading>
            <div className='flex' >
                <Heading className='w-full' size='h5'>I am a Computer Engineering Coop student from University of Alberta.
                Currently interning at <strong>Litespace</strong> and the <strong>University of Alberta</strong> as a Digital Marketing QA</Heading>
            </div>
        </div>
            <Carlos noShowSm={true}/>
        </div>
        
    )
}

export default Introduction;
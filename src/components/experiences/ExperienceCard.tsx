import React, {FC} from 'react';
import Heading from '../Heading';
import UAlberta from '../../gallery/icon-ualberta.svg'
import './Experiences.css'


const ExperienceCard = () => {
    return (

        <div className=' circle1 relative overflow-visible flex justify-center items-center rounded-full border-2 border-white h-28 w-full hover:bg-green '>
            <img src={UAlberta} alt='UAlberta icon'></img>
                         <div className='job1 px-10 py-8 absolute rounded-[25px] xl:w-[50vw]  lg:w-[50vw]'>
                                <Heading className='text-white font-extrabold' size='h3'>SWE Intern</Heading>
                                <Heading className='mt-3 text-[#905EFF] font-extrabold' size='h5'>Litespace</Heading>
                                <ul className='mt-6 text-white list-disc text-lg xl:text-xl leading-9'>
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
      
    )
}

export default ExperienceCard;
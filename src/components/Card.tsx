import React,{FC} from 'react';
import Heading from './Heading';
import UPrintI from '../gallery/Screenshot 2023-04-02 174506.png'
import {BsYoutube} from 'react-icons/bs'
import {DiGithubAlt} from 'react-icons/di';
import SideBarIcon from './SideBarIcon';
import './Card.css'

export interface CardProps {
    title: string,
    subtitle:string,
    hrefYT?:string,
    hrefGH?:string
}

const Card:FC<CardProps> = ({
    title,
    subtitle,
    hrefYT,
    hrefGH
}) => {
    return (
        <div className='flex flex-col gap-10 gap-y-20 group cursor-pointer bg-gray-100 rounded-lg inset-0 border-gradient'> 
            <div className="relative h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200-ease-out border-4 border-gradient">
                <img className='object-cover w-ful h-full object-left lg:object-center' src={UPrintI} alt='UPrintI'></img>
                <div className='absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg p-6 flex justify-between'>
                    <div>
                        <p  className='font-bold text-xl'>{title}</p>
                        <p>{subtitle}</p>
                    </div>
                    <div className='flex flex-row  gap-y-2 gap-x-4 items-center'>
                    <SideBarIcon className="rounded-lg"icon={<BsYoutube size = "40"/>}/>
                    <SideBarIcon className="rounded-lg"icon={<DiGithubAlt size = "40"/>}/>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Card;
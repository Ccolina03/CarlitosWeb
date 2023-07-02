import React, {FC} from "react"
import {AiOutlineGithub} from 'react-icons/ai'
import {FaUniversity} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import SideBarIcon from './SideBarIcon'

const SideBar = () => {
    return (
        <div className="absolute z-100 top-0 left-0 h-full w-16 flex flex-col xs:mb-16 sm:mb-16
        bg-gray-900 shadow-lg xl:flex-row xl:justify-around xl:h-16 xl:w-full xl:inset-x-0 lg:flex-row lg:justify-around lg:h-16 lg:w-full lg:inset-x-0">
            <div className="xl:flex-1 xl:flex xl:flex-row lg:flex lg:flex-row lg:flex-1 lg:items-center xl:items-center">
                <div className="xl:flex-1/2 xl:relative flex flex-col xl:flex-row xl:items-center xl:w-full lg:flex-1/2 lg:relative lg:flex lg:flex-row lg:items-center lg:">
                    <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/>

                    <SideBarIcon icon={<BsLinkedin size = "40"/>}/>

                    <SideBarIcon icon={<FaUniversity size = "40"/>}/>

                    <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/>

                </div>
                <div className="sm:mt-96 xs:mt-96 md:mt-0 lg:mt-0 xl:flex-1/2 xl:flex-start justify-end xl:pr-14 lg:pr-14">
                </div>

            </div>
        </div>
    )
}

export default SideBar;
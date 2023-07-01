import React, {FC} from "react"
import {AiOutlineGithub} from 'react-icons/ai'
import {FaUniversity} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col 
        bg-gray-900 shadow-lg xl:sticky xl:flex-row xl:justify-between xl:h-16 xl:w-screen xl:inset-x-0 lg:relative lg:flex-row lg:justify-between lg:h-16 lg:w-screen lg:inset-x-0">
            <div className="xl:flex-1 xl:flex xl:flex-row lg:flex lg:flex-row lg:flex-1 lg:items-center xl:items-center">
                <div className="xl:flex-1/2 xl:relative flex flex-col xl:flex-row xl:items-center xl:w-full lg:flex-1/2 lg:relative lg:flex lg:flex-row lg:items-center lg:">
                    <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/>

                    <SideBarIcon icon={<BsLinkedin size = "40"/>}/>

                    <SideBarIcon icon={<FaUniversity size = "40"/>}/>

                    <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/>

                </div>
                <div className="sm:mt-96 xs:mt-96 md:mt-0 lg:mt-0 xl:flex-1/2 xl:flex-start justify-end xl:pr-14 lg:pr-14">
                <SideBarIcon icon={<AiOutlineGithub size = "30"/>}/>
                </div>

            </div>
        </div>
    )
}

const SideBarIcon: FC<{icon: React.ReactNode}> = ({icon}) => {
    return (
    <div className="sidebar-icon xl:mr-2 xl:mt-0 sticky">
        {icon}
    </div>
    )
}

export default SideBar;
import React, {FC} from "react"
import {AiOutlineGithub} from 'react-icons/ai'
import {FaUniversity} from 'react-icons/fa'
const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 pt-16 flex flex-col
        bg-gray-900 shadow-lg">
            <SideBarIcon icon={<AiOutlineGithub size = "40"/>}/>

            <SideBarIcon icon={<FaUniversity size = "40"/>}/>

            <SideBarIcon icon={<FaUniversity size = "40"/>}/>
        </div>
    )
}

const SideBarIcon: FC<{icon: React.ReactNode}> = ({icon}) => {
    return (
    <div className="sidebar-icon">
        {icon}
    </div>
    )
}

export default SideBar
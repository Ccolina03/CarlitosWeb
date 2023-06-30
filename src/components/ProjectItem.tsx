import React from 'react';
import Card from './Card';
import Carlos from './Carlos';

const ProjectItem = () => {
    return (
    <div className='flex flex-row w-full'>
        <div className='flex flex-row flex-3/4 w-full xs:flex-col sm:flex-col'> 
            <Card/>
        </div>
        <div className='flex flex-1/4 justify-center items-center'>
            <Carlos noShowSm ={false}/>
        </div>
    </div>
    )
}

export default ProjectItem;
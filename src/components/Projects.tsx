import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
      </div>
    )
}

export default Projects;
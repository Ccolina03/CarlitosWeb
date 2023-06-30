import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        < div className="grid sm:grid-cols-1  md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
       
        </div>
    )
}

export default Projects;
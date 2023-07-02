import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import Experiences from '../components/experiences/Experiences'

const HomePage = () => {
    return (
        <div className='flex flex-col w-full space-y-10'> 
            <Introduction/> 
            <Projects/>
            <Experiences/>
        </div>
    )
}

export default HomePage;
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
const HomePage = () => {
    return (
        <div className='flex flex-col w-full space-y-10'> 
            <Introduction/> 
            <Projects/>
        </div>
    )
}

export default HomePage;
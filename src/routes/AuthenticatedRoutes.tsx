import {Routes, Route, Navigate} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
const AuthenticatedRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/projects' element={<ProjectPage/>}/>0
        </Routes>
    )
}

export default AuthenticatedRoutes;
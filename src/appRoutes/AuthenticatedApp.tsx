import { AuthenticatedLayout } from '../layout/AuthenticatedLayout';
import AuthenticatedRoutes from '../routes/AuthenticatedRoutes';
const AuthenticatedApp = () => {
    return (
        <div className='flex w-full'>
        <AuthenticatedLayout>
            <AuthenticatedRoutes/>
        </AuthenticatedLayout>
        </div>
    )
}

export default AuthenticatedApp;
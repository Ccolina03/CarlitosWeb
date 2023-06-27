import { AuthenticatedLayout } from '../layout/AuthenticatedLayout';
import AuthenticatedRoutes from '../routes/AuthenticatedRoutes';
const AuthenticatedApp = () => {
    return (
        <AuthenticatedLayout>
            <AuthenticatedRoutes/>
        </AuthenticatedLayout>
    )
}

export default AuthenticatedApp;
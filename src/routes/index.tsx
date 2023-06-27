import React, { Suspense } from 'react';
//Lazy Code later
import AuthenticatedApp from '../appRoutes/AuthenticatedApp';

const AppRoutes = () => {
    return ( 
    <Suspense>
        <AuthenticatedApp/>
    </Suspense>
    )
}

export default AppRoutes;
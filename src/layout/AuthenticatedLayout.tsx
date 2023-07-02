import React, {ReactNode, useState} from 'react';
import SideBar from '../components/SideBar';

export type AuthenticatedLayoutProps = {
    children?: ReactNode;
};

export const AuthenticatedLayout:React.FC<AuthenticatedLayoutProps> = ({children}) => {
    return (
      <div>
      <aside className='md:mb-16 lg:mb-16'>
      <SideBar/>
      </aside>
      <main className='bg-backgroundWork'>
        {children}
      </main>
      </div>
    )
}
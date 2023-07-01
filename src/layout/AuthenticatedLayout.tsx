import React, {ReactNode, useState} from 'react';
import SideBar from '../components/SideBar';

export type AuthenticatedLayoutProps = {
    children?: ReactNode;
};

export const AuthenticatedLayout:React.FC<AuthenticatedLayoutProps> = ({children}) => {
    return (
      <div>
      <SideBar/>
      <main className='ml-16 '>
        {children}
      </main>
      </div>
    )
}
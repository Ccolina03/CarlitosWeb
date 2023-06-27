import React, {ReactNode} from 'react';

export type AuthenticatedLayoutProps = {
    children?: ReactNode;
};

export const AuthenticatedLayout:React.FC<AuthenticatedLayoutProps> = ({children}) => {
    return (
      <div>
        {children}
      </div>
    )
}
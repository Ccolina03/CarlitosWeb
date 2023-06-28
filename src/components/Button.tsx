import React, {FC, HTMLAttributes, ReactNode} from 'react'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    option?: 'main' | 'secondary'
    size?: 'sm' | 'md' | 'lg'
    onClick?: () => void;
}

const getOption = (option: Pick<ButtonProps, 'option'>['option']): string => {
    switch (option) {
        case 'main':
            return 'transition-shadow duration-200  border-cultured-100'
        case 'secondary':
            return 'transition-shadow  duration-200 border-cultured-100'
        default:
            return 'transition-shadow duration-200 border-cultured-100'
    }
}

const Button: FC<ButtonProps> = ({
    children,
    option = 'main',
    size = 'md',
    onClick,
}) => {
    return (
    <button className={`flex justify-center font-semibold rounded ${getOption(option)} `}
    onClick={onClick}>
        {children}
    </button>
    )
}

export default Button;
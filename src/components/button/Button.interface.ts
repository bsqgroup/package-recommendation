import { ReactNode } from 'react';

export interface Props {
    children: ReactNode;
    size?: 'small' | 'large';
    role?: string;
    block?: boolean;
    className?: string;
    onClick?: any;
    [key: string]: any;
    ariaLabel?: string;
}

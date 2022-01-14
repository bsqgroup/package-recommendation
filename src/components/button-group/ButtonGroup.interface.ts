import { ReactNode } from 'react';

export interface Props {
    children: ReactNode;
    block?: boolean;
    reverse?: boolean;
    toolbar?: boolean;
    column?: boolean;
    className?: string;
    [key: string]: any;
}

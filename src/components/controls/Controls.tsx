import React, { Context, PropsWithChildren, ReactNode, useContext } from 'react';
import { Tree, WizardContext, WizardContextProps } from 'components/shared/Shared';

export interface ControlHook<T extends Tree, D extends any = any> {
    step: keyof T;
    tree: T;
    destinations: Record<keyof T, (data?: D) => void>;
    back: (currentData?: D) => void;
    reset: () => void;
    data?: D;
}

export function useControls<T extends Tree, D extends any = any>(): ControlHook<
    T,
    D
> {
    const { getControls, step, tree, data, back, reset } = useContext(
        WizardContext as Context<WizardContextProps<T, D>>
    );
    const backFunction = (newData?: D) => {
        back(newData);
    };
    const resetFunction = () => reset();
    return {
        step,
        tree,
        destinations: getControls(),
        data: data || undefined,
        back: backFunction,
        reset: resetFunction,
    };
}

export interface ControlProps<T extends Tree, D extends any = any> {
    children: (steps: ControlHook<T, D>) => ReactNode;
}

export function Controls<T extends Tree, D extends any = any>({
    children,
}: PropsWithChildren<ControlProps<T>>) {
    const getControls = useControls<T, D>();
    return <>{children({ ...getControls })}</>;
}

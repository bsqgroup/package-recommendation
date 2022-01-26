import React, { PropsWithChildren, useEffect } from 'react';

import { Tree } from 'components/shared/Shared';
import { useControls } from 'components/controls/Controls';

import s from './Step.module.scss'

export interface StepProps<T> {
    name: keyof T;
}

export function Step<T extends Tree>({ children, name }: PropsWithChildren<StepProps<T>>) {
    const { step, tree } = useControls<T>();
    const hiddenClass = step !== name ? s.step___hidden : '';
    const introClass = name === 'intro' ? s.step___intro : '';

    useEffect(() => {
        if (!Object.keys(tree).includes(name as string)) {
            console.warn(`Step component with name ${name} is not found in step tree!`);
        }
    }, [name, tree]);

    return (
        <div className={`${s.step} ${hiddenClass} ${introClass}`}>
            {step === name && children}
        </div>
    );
}

import React from 'react';

import Button from 'components/button/Button';
import { useControls } from 'components/controls/Controls';
import { Props } from './Actions.interface';

import s from './Actions.module.scss';

export default ({ firstStep, lastStep, nextStep, activeCode, currentAnswer }: Props): JSX.Element => {
    const { destinations, back } = useControls();

    return (
        <div className={s.actions}>
            <div>
                {!firstStep && (
                    <Button
                        role="secondary"
                        onClick={back}
                        disabled={firstStep}
                    >
                        Previous
                    </Button>
                )}
            </div>
            <div>
                {!lastStep ? (
                    <Button
                        role="success"
                        onClick={destinations[nextStep]}
                        disabled={currentAnswer === ''}
                    >
                        Next
                    </Button>
                ) : (
                    <Button
                        role="success"
                        onClick={destinations[activeCode]}
                        disabled={currentAnswer === ''}
                    >
                        Next
                    </Button>
                )}
            </div>
        </div>
    );
};

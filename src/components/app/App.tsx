import React from 'react';

import { Quiz } from 'components/quiz/Quiz';
import { Wizard } from 'components/wizard/Wizard';

import s from './App.module.scss';

export default (): JSX.Element => {
    const steps = {
        intro: ['Q1'],
        Q1: ['Q2', 'LBG', 'LLP'],
        Q2: ['Q3', 'NONRES', 'Q1'],
        Q3: ['Q4', 'Q2'],
        Q4: ['Q5', 'Q3'],
        Q5: ['Q6', 'Q5'],
        Q6: ['Q7', 'Q6'],
        Q7: ['Q8', 'Q7'],
        Q8: ['Q9', 'Q8'],
        Q9: ['LBS1', 'LBS2', 'LBS3', 'LBS4', 'LBS5', 'Q8'],
        LBG: [],
        LLP: [],
        NONRES: [],
        LBS1: [],
        LBS2: [],
        LBS3: [],
        LBS4: [],
        LBS5: [],
        reset: ['intro'],
    } as const;

    return (
        <div className={s.app}>
            <div className={s.app__wrapper}>
                <div className={s.app__form}>
                    <Wizard tree={steps} first="intro">
                        <Quiz />
                    </Wizard>
                </div>
            </div>
        </div>
    );
};

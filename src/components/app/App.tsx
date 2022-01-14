import React from 'react';
import { Wizard } from 'react-decision-tree-flow';

import { Quiz } from 'components/quiz/Quiz';

import s from './App.module.scss';

export default (): JSX.Element => {
    const steps = {
        intro: ['Q1'],
        Q1: ['Q2', 'LBG', 'LLP', 'intro'],
        Q2: ['Q3', 'NONRES', 'Q1', 'intro'],
        Q3: ['Q4', 'Q2', 'intro'],
        Q4: ['Q5', 'Q3', 'intro'],
        Q5: ['Q6', 'Q5', 'intro'],
        Q6: ['Q7', 'Q6', 'intro'],
        Q7: ['Q8', 'Q7', 'intro'],
        Q8: ['Q9', 'Q8', 'intro'],
        Q9: ['LBS1', 'LBS2', 'LBS3', 'LBS4', 'LBS5', 'Q8', 'intro'],
        LBG: ['intro'],
        LLP: ['intro'],
        NONRES: ['intro'],
        LBS1: ['intro'],
        LBS2: ['intro'],
        LBS3: ['intro'],
        LBS4: ['intro'],
        LBS5: ['intro'],
    } as const;

    return (
        <div className={s.app}>
            <div className={s.app__wrapper}>
                <div className={s.app__form}>
                    <Wizard tree={steps} first='intro'>
                        <Quiz />
                    </Wizard>
                </div>
            </div>
        </div>
    );
};

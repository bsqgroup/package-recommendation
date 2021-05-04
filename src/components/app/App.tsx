import React from 'react';
import { Wizard } from 'react-decision-tree-flow';

import Quiz from 'components/quiz/Quiz';

import s from './App.module.scss';

export default(): JSX.Element => {
  const steps = {
      intro: ['Q1'],
      Q1: ['Q2', 'R1B', 'R1C'],
      Q2: ['Q3', 'R2B'],
      Q3: ['Q4', 'R3B'],
      Q4: ['R4A', 'R4B', 'Q5'],
      Q5: ['Q6', 'R5B', 'R5C'],
      Q6: ['Q7', 'R6B', 'R6C'],
      Q7: ['R7A', 'R7B'],
      R1B: [],
      R1C: [],
      R2B: [],
      R3B: [],
      R4A: [],
      R4B: [],
      R5B: [],
      R5C: [],
      R6B: [],
      R6C: [],
      R7A: [],
      R7B: [],
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
}
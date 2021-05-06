import React from 'react';
import { Wizard } from 'react-decision-tree-flow';

import Quiz from 'components/quiz/Quiz';

import s from './App.module.scss';

export default(): JSX.Element => {
  const steps = {
      intro: ['Q1'],
      Q1: ['Q2', 'R1B', 'R1C'],
      Q2: ['Q3', 'R2B', 'Q1'],
      Q3: ['Q4', 'R3B', 'Q2'],
      Q4: ['R4A', 'R4B', 'Q5', 'Q3'],
      Q5: ['Q6', 'R5B', 'R5C', 'Q5'],
      Q6: ['Q7', 'R6B', 'R6C', 'Q6'],
      Q7: ['Q8', 'R7B', 'Q7'],
      Q8: ['R8A', 'Q9', 'Q8'],
      Q9: ['R9A', 'R9B', 'Q8'],
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
      R7B: [],
      R8A: [],
      R9A: [],
      R9B: [],
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
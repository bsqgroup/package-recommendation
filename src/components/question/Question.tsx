import React, { useState } from 'react';
import { Button, Progress } from 'shards-react';

import Icon from 'components/icon/Icon';
import { Props, Answer } from './Question.interface';
import s from './Question.module.scss';

export default(props: Props): JSX.Element => {
    const [nextStep, setNextStep] = useState<any>();
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const { id, question, answers, destinations, columns, progress } = props;
    const answersStyle = columns === 2 ? s.question__options___two : s.question__options___three;

    const selectAnswer = (name: string, next_step: string) => {
        setSelectedAnswer(name);
        setNextStep(next_step);
    }

    return (
        <div className={s.question}>
            <div className={s.question__header}>
                <h1 className={s.question__question}>{id}. {question}</h1>
            </div>
            <div className={`${s.question__options} ${answersStyle}`}>
                { answers && answers.map(({ id, name, answer, next_step }: Answer, i: number) => {
                    const selected = name === selectedAnswer;

                    return (
                        <div
                            key={`question-${id}-answer-${i}`}
                            className={`${s.question__option} ${selected ? s.question__option___selected : ''}`}
                            onClick={() => selectAnswer(name, next_step)}
                        >
                            <h3 className={s.question__answer}>{answer}</h3>
                            <Icon
                                name="check-circle"
                                type="solid"
                                className={`${s.question__icon} ${selected ? s.question__icon___active : ''}`}
                            />
                        </div>
                    );
                })}
            </div>
            <div className={s.question__progress}>
                <Progress theme="success" value={progress} />
            </div>
            <div className={s.question__actions}>
                <Button theme="success" onClick={nextStep ? destinations[nextStep] : null} disabled={!nextStep}>Next</Button>
            </div>
        </div>
    );
}
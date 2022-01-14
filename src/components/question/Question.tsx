import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/pro-solid-svg-icons';

import Button from 'components/button/Button';
import { IAnswer } from 'interfaces';
import { Props } from './Question.interface';

import s from './Question.module.scss';

export default (props: Props): JSX.Element => {
    const [currentAnswer, setCurrentAnswer] = useState<string>('');
    const [nextStep, setNextStep] = useState<string>('');
    const { id, question, answers, destinations, columns, activeCode, setActiveCode } = props;
    const prevStep = Object.keys(destinations)[Object.keys(destinations).length - 1] === 'intro'
        ? destinations[Object.keys(destinations)[Object.keys(destinations).length - 2]]
        : destinations[Object.keys(destinations)[Object.keys(destinations).length - 1]];
    const firstStep = id === 1;
    const lastStep = id === 9;

    const selectAnswer = (item: IAnswer) => {
        setCurrentAnswer(item.name)
        if (item.recommendation) {
            if (item.quit_quiz) {
                setNextStep(item.recommendation.name);
            } else {
                setActiveCode(item.recommendation.name);
                setNextStep(item.next_question.name);
            }
        } else {
            setNextStep(item.next_question.name);
        }
    };

    return (
        <div className={s.question}>
            <div className={s.question__header}>
                <h1 className={s.question__question}>{id}. {question}</h1>
            </div>
            <div className={s.question__options}>
                {answers && answers.map((item: IAnswer, i: number) => {
                    const { id, name, answer, next_question, recommendation, quit_quiz } = item;
                    const selected = name === currentAnswer;

                    return (
                        <div
                            key={`question-${id}-answer-${i}`}
                            className={`${s.question__option} ${selected ? s.question__option___selected : ''}`}
                            onClick={() => selectAnswer(item)}
                        >
                            <h3 className={s.question__answer}>{answer}</h3>
                            <div className={`${s.question__icon} ${selected ? s.question__icon___active : ''}`}>
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    size='sm'
                                    aria-label='check icon.'
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={s.question__progress}>
            </div>
            <div className={s.question__actions}>
                <div>
                    {!firstStep && (
                        <Button
                            role="secondary"
                            onClick={prevStep}
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
                            disabled={!currentAnswer}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            role="success"
                            onClick={destinations[activeCode]}
                            disabled={!currentAnswer}
                        >
                            Next
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfoCircle } from '@fortawesome/pro-solid-svg-icons';

import Actions from 'components/actions/Actions';
import Button from 'components/button/Button';
import Progress from 'components/progress/Progress';
import { IAnswer } from 'interfaces';
import { Props } from './Question.interface';

import s from './Question.module.scss';

export default ({ id, question, answers, info_text, destinations, back, columns, activeCode, setActiveCode }: Props): JSX.Element => {
    const [currentAnswer, setCurrentAnswer] = useState<string>('');
    const [nextStep, setNextStep] = useState<string>('');
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
        <>
            <div className={s.question}>
                <div className={s.question__header}>
                    <h1 className={s.question__question}>
                        {id}. {question}
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className={s.question__infoIcon}
                            data-tip={info_text}
                        />
                    </h1>
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
            </div>
            <Progress currentStep={id} />
            <Actions
                firstStep={firstStep}
                lastStep={lastStep}
                nextStep={nextStep}
                activeCode={activeCode}
                currentAnswer={currentAnswer}
            />
        </>
    );
};

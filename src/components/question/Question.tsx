import { useState } from 'react';

import Actions from 'components/actions/Actions';
import Markdown from 'components/markdown/Markdown';
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
                if (!lastStep) setNextStep(item.next_question.name);
            }
        } else {
            if (!lastStep) setNextStep(item.next_question.name);
        }
    };

    return (
        <>
            <div className={s.question}>
                <div className={s.question__header}>
                    <div className={s.question__number}>{id}.</div>
                    <div>
                        <h1 className={s.question__question}>{question}</h1>
                        {info_text && <Markdown className={s.question__helpText} source={info_text} />}
                    </div>
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
                                <h3 className={s.question__answer}><Markdown source={answer} /></h3>
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

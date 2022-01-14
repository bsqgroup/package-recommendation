import React, { useEffect, useState } from 'react';
import { Step, Controls, useControls } from 'react-decision-tree-flow';

import Introduction from 'components/introduction/Introduction';
import Question from 'components/question/Question';
import Recommendation from 'components/recommendation/Recommendation';
import { Spinner } from 'components/spinner/Spinner';
import { Topbar } from 'components/topbar/Topbar';
import { getQuestions } from 'services/questions.service';
import { getRecommendations } from 'services/recommendations.service';
import { getSteps } from 'services/steps.service';
import { IStep, IQuestion, IRecommendation } from 'interfaces';

import s from './Quiz.module.scss';

export const Quiz = () => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [activeCode, setActiveCode] = useState<string>('');
    const [steps, setSteps] = useState<IStep[] | []>([]);
    const [questions, setQuestions] = useState<IQuestion[] | []>([]);
    const [recommendations, setRecommendations] = useState<IRecommendation[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
            const questions = await getQuestions();
            const recommendations = await getRecommendations();
            const steps = await getSteps();
            setQuestions(questions.data);
            setRecommendations(recommendations.data);
            setSteps(steps.data);
        };
        fetchData();
        setLoaded(true);
    }, []);

    const { destinations } = useControls();

    return (
        <div className={s.quiz}>
            {!loaded ? (
                <Spinner />
            ) : (
                <>
                    <Step name='intro'>
                        <Introduction destinations={destinations} />
                    </Step>
                    {steps && steps.map((step: any) => (
                        <Step key={step.name} name={step.name}>
                            <Topbar destinations={destinations} />
                            {step.type === 'Question' ? (
                                <Question
                                    {...step.question}
                                    name={step.name}
                                    destinations={destinations}
                                    columns={step.question.answers.length}
                                    activeCode={activeCode}
                                    setActiveCode={setActiveCode}
                                />
                            ) : (
                                <Recommendation {...step.recommendation} />
                            )}
                        </Step>
                    ))}
                </>
            )}
        </div>
    );
};

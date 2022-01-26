import React, { useEffect, useState } from 'react';

import { useControls } from 'components/controls/Controls';
import Introduction from 'components/introduction/Introduction';
import Question from 'components/question/Question';
import Recommendation from 'components/recommendation/Recommendation';
import { Spinner } from 'components/spinner/Spinner';
import { Step } from 'components/step/Step';
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

    const { destinations, back } = useControls();

    return (
        <div className={s.quiz}>
            {!loaded ? (
                <Spinner />
            ) : (
                <div className={s.quiz__steps}>
                    <Step name="intro">
                        <Topbar destinations={destinations} visible={false} />
                        <Introduction destinations={destinations} />
                    </Step>
                    {steps && steps.map((step: any) => (
                        <Step key={step.name} name={step.name} type={step.type}>
                            <Topbar destinations={destinations} />
                            {step.type === 'Question' ? (
                                <Question
                                    {...step.question}
                                    name={step.name}
                                    destinations={destinations}
                                    back={back}
                                    columns={step.question.answers.length}
                                    activeCode={activeCode}
                                    setActiveCode={setActiveCode}
                                />
                            ) : (
                                <Recommendation {...step.recommendation} />
                            )}
                        </Step>
                    ))}
                </div>
            )}
        </div>
    );
};

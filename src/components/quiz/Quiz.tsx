import React, { useEffect, useState } from 'react';
import { Step, Controls, useControls } from 'react-decision-tree-flow';

import Introduction from 'components/introduction/Introduction';
import Question from 'components/question/Question';
import Recommendation from 'components/recommendation/Recommendation';
import Spinner from 'components/spinner/Spinner';
import { getQuestions, getQuestionById } from 'services/questions.service';
import { getRecommendations, getRecommendationByName } from 'services/recommendations.service';
import { getSteps } from 'services/steps.service';
import { Props } from './Quiz.interface';

import s from './Quiz.module.scss';

const Quiz = (props: Props) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [steps, setSteps] = useState<any[]>([]);
    const [questions, setQuestions] = useState<any[]>([]);
    const [recommendations, setRecommendations] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const questions = await getQuestions();
            const recommendations = await getRecommendations();
            const steps = await getSteps();
            setQuestions(questions.data);
            setRecommendations(recommendations.data);
            setSteps(steps.data);
        }
        fetchData();
        setLoaded(true);
    }, []);

    const { destinations } = useControls();

    return (
        <div className={s.quiz}>
            { !loaded ? (
                <Spinner />
            ): (
                <>
                    <Step name="intro">
                        <Introduction destinations={destinations} />
                    </Step>
                    { steps && steps.map((step, i) => (
                        <Step key={step.name} name={step.name}>
                            { step.type === 'Question' ? (
                                <Question
                                    {...step.question}
                                    destinations={destinations}
                                    columns={step.question.answers.length}
                                    prev={i > 0}
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
}

export default Quiz;
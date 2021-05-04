import React, { useEffect, useState } from 'react';
import { Step, Controls, useControls } from 'react-decision-tree-flow';
import { Button } from 'shards-react';

import Question from 'components/question/Question';
import Recommendation from 'components/recommendation/Recommendation';
import Spinner from 'components/spinner/Spinner';
import { getQuestions, getQuestionById } from 'services/questions.service';
import { getRecommendations, getRecommendationByName } from 'services/recommendations.service';
import { Props } from './Quiz.interface';

import s from './Quiz.module.scss';

const Quiz = (props: Props) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [questions, setQuestions] = useState<any[]>([]);
    const [recommendations, setRecommendations] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const questions = await getQuestions();
            const recommendations = await getRecommendations();
            setQuestions(questions.data);
            setRecommendations(recommendations.data);
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
                        <div className={s.quiz__header}>
                            <h1 className={s.quiz__title}>Find the perfect package</h1>
                            <p>Let us help you with choosing the perfect package for your company formation.</p>
                            <Button theme="success" onClick={destinations['Q1']}>Get Started</Button>
                        </div>
                    </Step>
                    <Step name="Q1">
                        <Question {...getQuestionById(questions, 1)} destinations={destinations} columns={3} progress={13}/>
                    </Step>
                    <Step name="Q2">
                        <Question {...getQuestionById(questions, 2)} destinations={destinations} columns={2} progress={26}/>
                    </Step>
                    <Step name="Q3">
                        <Question {...getQuestionById(questions, 3)} destinations={destinations} columns={2} progress={39}/>
                    </Step>
                    <Step name="Q4">
                        <Question {...getQuestionById(questions, 4)} destinations={destinations} columns={3} progress={43}/>
                    </Step>
                    <Step name="Q5">
                        <Question {...getQuestionById(questions, 5)} destinations={destinations} columns={3} progress={56}/>
                    </Step>
                    <Step name="Q6">
                        <Question {...getQuestionById(questions, 6)} destinations={destinations} columns={3} progress={69}/>
                    </Step>
                    <Step name="Q7">
                        <Question {...getQuestionById(questions, 6)} destinations={destinations} columns={2} progress={82}/>
                    </Step>
                    <Step name="R1B">
                        <Recommendation {...getRecommendationByName(recommendations, "1B")} />
                    </Step>
                    <Step name="R1C">
                        <Recommendation {...getRecommendationByName(recommendations, "1C")} />
                    </Step>
                    <Step name="R2B">
                        <Recommendation {...getRecommendationByName(recommendations, "2B")} />
                    </Step>
                    <Step name="R3B">
                        <Recommendation {...getRecommendationByName(recommendations, "3B")} />
                    </Step>
                    <Step name="R4A">
                        <Recommendation {...getRecommendationByName(recommendations, "4A")} />
                    </Step>
                    <Step name="R4B">
                        <Recommendation {...getRecommendationByName(recommendations, "4B")} />
                    </Step>
                    <Step name="R5B">
                        <Recommendation {...getRecommendationByName(recommendations, "5B")} />
                    </Step>
                    <Step name="R5C">
                        <Recommendation {...getRecommendationByName(recommendations, "5C")} />
                    </Step>
                    <Step name="R6B">
                        <Recommendation {...getRecommendationByName(recommendations, "6B")} />
                    </Step>
                    <Step name="R6C">
                        <Recommendation {...getRecommendationByName(recommendations, "6C")} />
                    </Step>
                    <Step name="R7A">
                        <Recommendation {...getRecommendationByName(recommendations, "7A")} />
                    </Step>
                    <Step name="R7B">
                        <Recommendation {...getRecommendationByName(recommendations, "7B")} />
                    </Step>
                </>
            )}
        </div>
    );
}

export default Quiz;
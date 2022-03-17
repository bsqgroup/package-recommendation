import { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { Props } from './Introduction.interface';

import s from './Introduction.module.scss';

export default (props: Props): JSX.Element => {
    useEffect(() => {
        let loadingTimer = setTimeout(() => props.destinations.Q1(), 5000);
        return () => clearTimeout(loadingTimer);
    },[]);
    
    return (
        <div className={s.introduction}>
            <img
                src="https://s3-eu-west-1.amazonaws.com/1stformations/assets/live/images/1st-formations-logo.png"
                alt="1st Formations logo."
                className={s.introduction__logo}
            />
            <h1 className={s.introduction__title}>Find the perfect package</h1>
            <h3 className={s.introduction__subtitle}>Let us help you choose the right <br />package for your company formation</h3>
            <div className={s.introduction__spinner}>
                <ThreeDots color="#31a5cb" />
            </div>
        </div>
    );
};
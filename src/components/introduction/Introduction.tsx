import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/pro-light-svg-icons';

import Button from 'components/button/Button';
import { Props } from './Introduction.interface';

import s from './Introduction.module.scss';

export default (props: Props): JSX.Element => {
    useEffect(() => {
        let loadingTimer = setTimeout(() => props.destinations.Q1(), 4000);
        return () => clearTimeout(loadingTimer);
    },[]);
    
    return (
        <div className={s.introduction}>
            <img
                src="https://s3-eu-west-1.amazonaws.com/1stformations/assets/live/images/1st-formations-logo.png"
                alt="1st Formations logo."
                className={s.introduction__logo}
            />
            <h1 className={s.introduction__title}>Let us help you choose the right <br />package for your company formation</h1>
            <div className={s.introduction__icon}>
                <FontAwesomeIcon icon={faSpinner} spin size="5x" />
            </div>
        </div>
    );
};
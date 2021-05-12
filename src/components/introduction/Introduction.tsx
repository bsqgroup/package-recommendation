import React from 'react';
import { Button } from 'shards-react';

import { Props } from './Introduction.interface';

import s from './Introduction.module.scss';

export default (props: Props): JSX.Element => (
    <div className={s.introduction}>
        <h1 className={s.introduction__title}>Find the perfect package</h1>
        <h3 className={s.introduction__subtitle}>
            Let us help you with choosing the perfect package for your company
            formation.
        </h3>
        <Button
            className={s.introduction__button}
            size='lg'
            theme='success'
            onClick={props.destinations.Q1}
        >
            Get Started
        </Button>
    </div>
);

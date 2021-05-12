import React from 'react';

import s from './Spinner.module.scss';

export const Spinner = (): JSX.Element => (
    <div className={s.spinner}>
        <span className={s.spinner__segment} />
        <span className={s.spinner__segment} />
        <span className={s.spinner__segment} />
    </div>
);

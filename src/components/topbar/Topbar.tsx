import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/pro-light-svg-icons';

import { Props } from './Topbar.interface';

import s from './Topbar.module.scss';

export const Topbar = ({ destinations }: Props) => {
    return (
        <div className={s.topbar}>
            <div
                className={s.topbar__reset}
                onClick={destinations['intro']}
            >
                <FontAwesomeIcon icon={faUndo} />
                Start Again
            </div>
        </div>
    );
};

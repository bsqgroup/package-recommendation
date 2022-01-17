import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUndo } from '@fortawesome/pro-light-svg-icons';

import { useControls } from 'components/controls/Controls';

import { Props } from './Topbar.interface';

import s from './Topbar.module.scss';

export const Topbar = ({ destinations }: Props) => {
    const { reset } = useControls();
    const close = () => {
        if (typeof window !== 'undefined' && typeof window.lity !== 'undefined') {
            window.lity.current().close();
        }
        return;
    }

    return (
        <div className={s.topbar}>
            <div onClick={close} className={s.topbar__close}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div
                className={s.topbar__reset}
                onClick={reset}
            >
                <FontAwesomeIcon icon={faUndo} />
                Start Again
            </div>
        </div>
    );
};

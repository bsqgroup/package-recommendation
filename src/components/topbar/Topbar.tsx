import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUndo } from '@fortawesome/pro-light-svg-icons';

import { useControls } from 'components/controls/Controls';
import { Props } from './Topbar.interface';

import s from './Topbar.module.scss';

export const Topbar = ({ visible = true }: Props) => {
    const { reset } = useControls();

    return (
        <div className={s.topbar}>
            { visible && (
                <div
                    className={s.topbar__reset}
                    onClick={reset}
                >
                    <FontAwesomeIcon icon={faUndo} />
                    Start Again
                </div>
            )}
        </div>
    );
};

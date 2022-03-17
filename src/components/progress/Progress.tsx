import { Props } from './Progress.interface';

import s from './Progress.module.scss';

export default ({ currentStep }: Props): JSX.Element => {
    const progressWidth = (currentStep / 9) * 100;
    return (
        <div className={s.progress}>
            <h4 className={s.progress__text}>Progress</h4>
            <div className={s.progress__bar}>
                <div className={s.progress__progress} style={{ width: `${progressWidth}%`}}></div>
            </div>
        </div>
    );
};

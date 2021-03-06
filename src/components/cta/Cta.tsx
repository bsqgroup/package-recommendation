import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/pro-solid-svg-icons';

import s from './Cta.module.scss';

export default (): JSX.Element => (
    <div className={s.cta}>
        <h3>Still need help? <br />Call a company formation expert</h3>
        <a href="tel:+442038972233">
            <FontAwesomeIcon icon={faPhone} />020 3897 2233
        </a>
    </div>
);

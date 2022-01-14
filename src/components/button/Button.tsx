import React from 'react';

import { capitalize } from 'utils/capitalize';
import { Props } from './Button.interface';

import s from './Button.module.scss';

export default ({
    to, ariaLabel, children, size, role, className, block, onClick, type = 'button', ...props
}: Props): JSX.Element => {
    const roleClass = role ? s[ `btn${capitalize(role)}` ] : '';
    const sizeClass = size ? s[ `btn${capitalize(size)}` ] : '';
    const blockClass = block ? s.btnBlock : '';

    if (to) {
        return (
            <a
                className={`${s.btn} ${className || ''} ${blockClass} ${sizeClass} ${roleClass}`}
                href={to}
                rel="nofollow noreferrer noopener"
                aria-label={ariaLabel}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={`${s.btn} ${className || ''} ${blockClass} ${sizeClass} ${roleClass}`}
            onClick={onClick}
            aria-label={ariaLabel}
            // eslint-disable-next-line react/button-has-type
            type={type}
        >
            {children}
        </button>
    );
};

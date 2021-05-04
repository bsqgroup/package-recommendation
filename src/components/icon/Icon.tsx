import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fal, fab);

import { Props } from './Icon.interface';

import s from './Icon.module.scss';

export default ({ size = 'small', name, type = 'regular', className }: Props): JSX.Element => {
    const getIconType = (type: string) => {
        switch(type) {
            case 'light': return 'fal';
            case 'regular': return 'far';
            case 'solid': return 'fas';
            case 'brands': return 'fab';
            default: return 'far';
        }
    }

    return (
        <div className={`${s.icon} ${s[`icon___${size}`]} ${className ? className : ''}`}>
            <FontAwesomeIcon icon={[getIconType(type), name]} />
        </div>
    )
}
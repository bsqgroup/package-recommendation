import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/pro-solid-svg-icons';
import { Button } from 'shards-react';

import Markdown from 'components/markdown/Markdown';
import { Props } from './Recommendation.interface';

import s from './Recommendation.module.scss';

export default (props: Props): JSX.Element => {
    const { id, name, recommended_package, recommended_package_content, optional_package, optional_package_content } = props;
    const recommendationStyle = optional_package ? s.recommendation__columns___two : s.recommendation__columns___one;

    return (
        <>
            <div className={s.recommendation}>
                <div className={`${s.recommendation__columns} ${recommendationStyle}`}>
                    <div className={s.recommendation__column}>
                        <h1 className={s.recommendation__title}>We recommend...</h1>
                        <div className={s.recommendation__header}>
                            <h3 className={s.recommendation__package}>
                                {recommended_package.name}
                            </h3>
                            <div className={s.recommendation__price}>
                                <span>£{recommended_package.price}</span>
                            </div>
                        </div>
                        <Markdown
                            className={s.recommendation__content}
                            source={recommended_package_content}
                            container
                            listItemIcon={
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    size='sm'
                                    aria-label='check icon.'
                                />
                            }
                        />
                        <div className={s.recommendation__buttons}>
                            <a
                                className={`${s.recommendation__button} ${s.recommendation__button___buy}`}
                                href={recommended_package.buy_link}
                                target='_blank'
                                rel='noreferrer'
                            >
                                Order
                            </a>
                            <a
                                className={`${s.recommendation__button} ${s.recommendation__button___details}`}
                                href={recommended_package.details_link}
                                target='_blank'
                                rel='noreferrer'
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                    {optional_package && (
                        <div className={s.recommendation__column}>
                            <h1 className={s.recommendation__title}>Also consider...</h1>
                            <div className={s.recommendation__header}>
                                <h3 className={s.recommendation__package}>{optional_package.name}</h3>
                                <div className={s.recommendation__price}>
                                    <span>£{optional_package.price}</span>
                                </div>
                            </div>
                            <Markdown
                                className={s.recommendation__content}
                                source={optional_package_content}
                                container
                                listItemIcon={
                                    <FontAwesomeIcon
                                        icon={faCheckCircle}
                                        size='sm'
                                        aria-label='check icon.'
                                    />
                                }
                            />
                            <div className={s.recommendation__buttons}>
                                <a
                                    className={`${s.recommendation__button} ${s.recommendation__button___buy}`}
                                    href={optional_package.buy_link}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Order
                                </a>
                                <a
                                    className={`${s.recommendation__button} ${s.recommendation__button___details}`}
                                    href={optional_package.details_link}
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

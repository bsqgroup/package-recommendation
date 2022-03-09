import React from 'react';
import Markdown from 'react-markdown';
import shortcodes from 'remark-shortcodes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/pro-solid-svg-icons';

import { Props } from './Markdown.interface';

import s from './Markdown.module.scss';

export default ({ source, className, container, listItemIcon }: Props): JSX.Element => {
    const components = {
        ul: (props: any) => {
            if (listItemIcon) {
                return <ul className={s.markdownList}>{props.children}</ul>;
            }

            return <ul>{props.children}</ul>;
        },
        ol: (props: any) => {
            if (listItemIcon) {
                return <ol className={s.markdownList}>{props.children}</ol>;
            }

            return <ol>{props.children}</ol>;
        },
        li: (props: any) => {
            console.log(props);
            if (listItemIcon) {
                if (props.ordered === true) {
                    return (
                        <li className={s.markdownList__item}>
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                size='sm'
                                aria-label='check icon.'
                                color="#333"
                            />
                            <span>{props.children}</span>
                        </li>
                    );
                }

                return (
                    <li className={s.markdownList__item}>
                        {listItemIcon} 
                        <span>{props.children}</span>
                    </li>
                );
            }

            return <li>{props.children}</li>;
        },
    };

    if (container) {
        return (
            <Markdown
                children={source}
                className={className}
                components={components}
                plugins={[
                    [shortcodes, { startBlock: '[[', endBlock: ']]', inlineMode: true }],
                ]}
            />
        );
    }

    return (
        <Markdown
            children={source}
            className={className}
            disallowedTypes={['paragraph', 'heading']}
            unwrapDisallowed
            components={components}
            plugins={[
                [shortcodes, { startBlock: '[[', endBlock: ']]', inlineMode: true }],
            ]}
        />
    );
};

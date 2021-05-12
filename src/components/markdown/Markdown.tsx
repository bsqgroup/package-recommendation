import React from 'react';
import Markdown from 'react-markdown';
import shortcodes from 'remark-shortcodes';

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
                return <ol className={s.markdownList___ordered}>{props.children}</ol>;
            }

            return <ul>{props.children}</ul>;
        },
        li: (props: any) => {
            if (listItemIcon) {
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

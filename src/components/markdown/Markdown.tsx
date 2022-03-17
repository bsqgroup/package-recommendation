import Markdown from 'react-markdown';
import shortcodes from 'remark-shortcodes';

import { Props } from './Markdown.interface';

import s from './Markdown.module.scss';

export default ({ source, className, container, listItemIcon }: Props): JSX.Element => {
    const renderers = {
        listItem: ({ children }: any) => {
            if (listItemIcon) {
                return (
                    <li className={s.markdownList__item}>
                        {listItemIcon} <span>{children}</span>
                    </li>
                );
            }
    
            return <li>{children}</li>;
        },
    };

    if (container) {
        return (
            <Markdown
                source={source}
                className={className}
                renderers={renderers}
                plugins={[
                    [shortcodes, { startBlock: '[[', endBlock: ']]', inlineMode: true }],
                ]}
            />
        );
    }

    return (
        <Markdown
            source={source}
            className={className}
            disallowedTypes={['paragraph', 'heading']}
            unwrapDisallowed
            renderers={renderers}
            plugins={[
                [shortcodes, { startBlock: '[[', endBlock: ']]', inlineMode: true }],
            ]}
        />
    );
};

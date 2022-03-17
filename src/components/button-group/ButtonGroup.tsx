import { Props } from './ButtonGroup.interface';

import s from './ButtonGroup.module.scss';

export default ({ children, className, block, reverse, toolbar, column }: Props): JSX.Element => {
    const blockClass = block !== undefined ? s.btnGrpBlock : '';
    const reverseClass = reverse !== undefined ? s.btnGrpReverse : '';
    const toolbarClass = toolbar !== undefined ? s.btnGrpToolbar : '';
    const columnClass = column !== undefined ? s.btnGrpColumn : '';

    return (
        <div className={`${s.btnGrp} ${className || ''} ${blockClass} ${columnClass} ${reverseClass} ${toolbarClass}`}
        >
            {children}
        </div>
    );
};

import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import s from './Button.module.scss';

interface IButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: PropsWithChildren<IButtonProps>) => {
  return (
    <button {...props} className={classNames(s.btn, className)}>
      {children}
    </button>
  );
};

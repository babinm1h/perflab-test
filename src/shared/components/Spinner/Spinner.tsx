import React from 'react';
import s from './Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.loader}></span>
    </div>
  );
};

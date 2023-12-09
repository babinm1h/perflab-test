import React from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../Button';

import s from './Sidebar.module.scss';

interface ISidebarProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const Sidebar = ({ isOpen, onClose, children, ...props }: ISidebarProps) => {
  if (!isOpen) return null;

  return createPortal(
    <aside className={s.overlay} onClick={onClose}>
      <aside {...props} className={s.bar} onClick={(e) => e.stopPropagation()}>
        <header className={s.header}>
          <Button onClick={onClose}>Закрыть</Button>
        </header>
        {children}
      </aside>
    </aside>,
    document.body,
  );
};

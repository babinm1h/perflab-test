import { Sidebar } from '@/shared/components/Sidebar';
import { useBooleanState } from '@/shared/hooks';
import { NavLink, Outlet } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import { ProductsCart } from '@/modules/Products/containers';

import s from './BaseLayout.module.scss';

export const BaseLayout = () => {
  const { isTrue, setFalse, toggleValue } = useBooleanState();

  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <Button onClick={toggleValue}>Корзина</Button>
        <Sidebar isOpen={isTrue} onClose={setFalse}>
          <ProductsCart />
        </Sidebar>

        <NavLink to="/">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
      </header>
      <Outlet />
    </div>
  );
};

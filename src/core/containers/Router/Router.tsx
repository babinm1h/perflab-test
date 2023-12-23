import { ProductsPage } from '@/modules/Products/containers';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '../BaseLayout/BaseLayout';
import { UsersPage } from '@/modules/Users/containers';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route element={<ProductsPage />} index />
        <Route element={<UsersPage />} path="/users" />
      </Route>
    </Routes>
  );
};

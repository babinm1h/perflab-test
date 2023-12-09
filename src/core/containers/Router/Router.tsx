import { ProductsPage } from '@/modules/Products/containers';
import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '../BaseLayout/BaseLayout';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route element={<ProductsPage />} index />
      </Route>
    </Routes>
  );
};

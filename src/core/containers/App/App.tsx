import { Provider } from 'react-redux';
import { store } from '@core/store';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '../Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../styles/normalize.css';
import '../styles/base.scss';

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } });

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
};

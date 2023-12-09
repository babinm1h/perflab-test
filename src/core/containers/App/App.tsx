import { Provider } from 'react-redux';
import { store } from '@core/store';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '../Router';

import '../styles/normalize.css';
import '../styles/base.scss';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

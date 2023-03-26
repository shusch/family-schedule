import { FC } from 'react';
import { createRoot } from 'react-dom/client';
import { Global, css } from '@emotion/react';

import { Router } from './Router';
import './i18n';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const App: FC = () => {
  return (
    <>
      <Global styles={style} />
      <Router />
    </>
  );
};

const style = css`
  html,
  body {
    height: 100%;
  }
  #app {
    height: 100%;
  }
`;

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);
root.render(<App />);

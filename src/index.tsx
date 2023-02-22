import { FC } from 'react';
import { createRoot } from 'react-dom/client';

const App: FC = () => {
  return (
    <h1>Schedule App</h1>
  );
};

const container = document.getElementById('app');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container);
root.render(<App />);

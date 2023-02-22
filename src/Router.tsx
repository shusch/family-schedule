import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { List } from './pages/List';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

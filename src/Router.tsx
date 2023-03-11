import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Schedule } from './pages/Schedule';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule/:scheduleId" element={<Schedule />} />
      </Routes>
    </BrowserRouter>
  );
};

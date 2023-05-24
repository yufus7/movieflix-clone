import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';

function Navigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/movieflix-clone/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;

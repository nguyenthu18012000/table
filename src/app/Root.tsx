import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  Table2 } from '@pages/table';
import 'antd/dist/reset.css';

const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={Table2} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root;
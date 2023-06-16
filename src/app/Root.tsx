import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tables } from '@pages/table';
import 'antd/dist/reset.css';

const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={Tables} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root;
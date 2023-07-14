import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tables } from '@pages/table';
import 'antd/dist/reset.css';
import Chart from '@pages/chart';

const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/table' Component={Tables} />
          <Route path='/' Component={Chart} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root;
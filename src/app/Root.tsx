import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Test } from './pages/test';

const Root = () => {
  return (
    // https://stackoverflow.com/questions/69866581/property-exact-does-not-exist-on-type

    // <Test />
    // <div>ádflk;ádfalsdfkjasd;fljk</div>
    <BrowserRouter>
        <Routes>
            <Route path='/abc' Component={Test} />
        </Routes>
    </BrowserRouter>
  )
}

export default Root;
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import React from 'react';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

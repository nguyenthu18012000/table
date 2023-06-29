import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Root />    
    </QueryClientProvider>
  </React.StrictMode>
);

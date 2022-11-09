import React, { ReactComponentElement } from 'react';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import loadable from '@loadable/component';

const App = loadable(() => import('./App'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

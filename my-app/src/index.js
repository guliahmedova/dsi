import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
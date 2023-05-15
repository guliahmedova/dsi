import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import Layout from './components/Layout';
import Home from './components/pages/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import Technology from './components/pages/Technology';
import Client from './components/pages/Client';
import About from './components/pages/About';
import Partner from './components/pages/Partner';
import OurTeam from './components/pages/OurTeam';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='services' element={<Services />} />
    <Route path='product' element={<Product />} />
    <Route path='technology' element={<Technology />} />
    <Route path='about' element={<About />} />
    <Route path='partner' element={<Partner />} />
    <Route path='client' element={<Client />} />
    <Route path='ourteam' element={<OurTeam />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
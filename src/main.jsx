import React from 'react'
import ReactDOM from 'react-dom/client'
import './Index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider.jsx'

import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'

import Spices from './Pages/Spices.jsx'
import Dal from './Pages/Dal.jsx'
import Rice from './Pages/Rice.jsx'
import Biscuit from './Pages/Biscuit.jsx'
import Dryfruits from './Pages/Dryfruits.jsx'
import Namkeen from './Pages/Namkeen.jsx'
import Eadbleoil from './Pages/Eadbleoil.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'
import Profile from './Dashboard/Profile.jsx'
import Products from './Dashboard/Products.jsx'
import Users from './Dashboard/Users.jsx'
import Login from './Pages/AuthonticationPages/Login.jsx'
import Signup from './Pages/AuthonticationPages/Signup.jsx'
import AddProducts from './Dashboard/AddProducts.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/spices',
        element: <Spices />
      },
      {
        path: '/dal',
        element: <Dal />
      },
      {
        path: '/rice',
        element: <Rice />
      },
      {
        path: '/biscuit',
        element: <Biscuit />
      },
      {
        path: '/dryfruits',
        element: <Dryfruits />
      },
      {
        path: '/namkeen',
        element: <Namkeen />
      },
      {
        path: '/eadableoil',
        element: <Eadbleoil />
      },
      {
        path: '/admin',
        element: <Dashboard />
      },
      {
        path: '/admin/',
        element: <Dashboard />
      },
      {
        path: '/admin/profile',
        element: <Profile />
      },
      {
        path: '/admin/products',
        element: <Products />
      },
      {
        path:'/admin/addproducts',
        element:<AddProducts/>
      },
      {
        path: '/admin/allusers',
        element: <Users />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)

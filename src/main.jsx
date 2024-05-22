import React from 'react'
import ReactDOM from 'react-dom/client'

import "./style.scss"

// import pages
import App from './App.jsx'
import Plans from './pages/Plans.jsx';
import About from './pages/about.jsx';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Error 404</h1>,
  },
  {
    path: "/plans",
    element: <Plans/>,
    errorElement: <h1>Error 404</h1>,
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <h1>Error 404</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

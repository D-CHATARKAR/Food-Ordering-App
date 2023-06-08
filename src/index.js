import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './components/About';
import Error from './components/Error';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';


const appRouter=createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
    {
      path:"/about",
      element:<About/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/",
      element:<Body/>,
    },
    {
      path:"/restaurant/:resId",
      element:<RestaurantMenu/>,
    },
   ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
reportWebVitals();

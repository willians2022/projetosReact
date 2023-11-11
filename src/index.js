import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import{ createBrowserRouter,RouterProvider } from 'react-router-dom';


const router = createBrowserRouter ([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/details",
    element:<details/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />


  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);




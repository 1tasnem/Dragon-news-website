import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Compoents/Home/Home.jsx';
import News from './Compoents/News/News.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
   {
    path: "/news",
    element: <News></News>
  },
   {
    path: "/login",
    element: <p>login</p>
  },
   {
    path: "/error",
    element: <h2>Error....</h2>
  },

  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)

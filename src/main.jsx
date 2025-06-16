import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router";
import Home from './Compoents/Home/Home.jsx';
import News from './Compoents/News/News.jsx';
import CategoryNews from './Compoents/Pages/CategoryNews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"",
        element:<Navigate to={"category/01"}></Navigate>
      },
      {
        path:"category/:id",
        element:<CategoryNews></CategoryNews>,
        loader : ({params}) =>
          fetch (`https://openapi.programming-hero.com/api/news/category/${params.id}`),

      },
    ]
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

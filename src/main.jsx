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
import About from './Compoents/About/About.jsx';
import Carrer from './Compoents/Carrer/Carrer.jsx';
import Auth from './Compoents/AuthProvider/Auth.jsx';
import Login from './Compoents/Login/Login.jsx';
import Register from './Compoents/Register/Register.jsx';
import AuthProvider from './Compoents/Provider/AuthProvider.jsx';
import ReadNews from './Compoents/Pages/ReadNews.jsx';
import PrivateRoutes from './Compoents/Routers/PrivateRoutes.jsx';





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
    path: "/about",
    element:<About></About>,
  },
   
  {
    path:"/carrer",
    element:<Carrer></Carrer>,
  },
   {
    path: "/error",
    element: <h2>Error....</h2>
  },
  {
    path:"/data/:id",
    element:<PrivateRoutes><ReadNews></ReadNews></PrivateRoutes>,
    loader:({params}) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path:"auth",
    element:<Auth></Auth>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>,
      },
      {
        path:"/auth/register",
        element:<Register></Register>,

      },
    ]
  }

  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)

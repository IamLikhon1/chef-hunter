import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './component/Home/Home.jsx';
import Blog from './component/Blog/Blog.jsx';
import ChefRecipePage from './component/ChefRecipePage/ChefRecipePage.jsx';
import Login from './component/Login/Login.jsx';
import Register from './component/Register/Register.jsx';
import ErrorPage from './component/ErrorPage.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './component/PrivateRoute/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'/allData/:id',
        element:<PrivateRoute><ChefRecipePage></ChefRecipePage></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/allData/${params.id}`)
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)

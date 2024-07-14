import React from 'react'
import Registration4 from './Pages/Registration4/Registration4.jsx';
import Login4 from './Pages/Login4/Login4.jsx';
import Home4 from './Pages/home4/Home4.jsx';
import ForgotPassword4 from './Pages/ForgotPassword4/ForgotPassword4.jsx';
import Sidebar4 from './Pages/components/Sidebar4/Sidebar4.jsx';
import store from './Store.jsx';
import { Provider } from 'react-redux';


import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import firebaseConfig from '../authentication/firebaseConfig.jsx';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/home4",
    element: <Home4 />
  },
  {
    path: "/registration4",
    element: <Registration4 />
  },
  {
    path: "/login4",
    element: <Login4 />
  },
  {
    path: "/forgotPassword4",
    element: <ForgotPassword4 />
  },
  {
    path: "/sidebar4",
    element: <Sidebar4 />,
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
  </React.StrictMode>
)
  

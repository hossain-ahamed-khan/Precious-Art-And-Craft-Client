import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Home from './pages/Home.jsx';
import AddCraftItem from './pages/AddCraftItem.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import AllCraftsItems from './pages/AllCraftsItems.jsx';
import MyCraftsList from './pages/MyCraftsList.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import CraftItemDetails from './pages/CraftItemDetails.jsx';
import UpdateMyCraft from './pages/UpdateMyCraft.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://art-and-crafts-server-94b3mfc19-hossains-projects-89628cd5.vercel.app')
      },
      {
        path: "/all-craft-items",
        element: <AllCraftsItems></AllCraftsItems>,
        loader: () => fetch('https://art-and-crafts-server-94b3mfc19-hossains-projects-89628cd5.vercel.app')
      },
      {
        path: "/craftItems/:id",
        element: <CraftItemDetails></CraftItemDetails>
      },
      {
        path: "/add-craft-items",
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path: "/my-craft-items",
        element: <PrivateRoute><MyCraftsList></MyCraftsList></PrivateRoute>

      },
      {
        path: '/updateCraft/:id',
        element: <UpdateMyCraft></UpdateMyCraft>,
        loader: ({ params }) => fetch(`https://art-and-crafts-server-94b3mfc19-hossains-projects-89628cd5.vercel.app/${params.id}`)
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
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

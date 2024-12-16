import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from './App'
import Home from "./pages/Home";
import BikeShop from "./pages/BikeShop";
import AlbertaTrafficSafetyAct from "./pages/AlbertaTrafficSafetyAct";
import HelpCenter from "./pages/HelpCenter";

import './assets/styles/globals.scss'

const basename: string = import.meta.env.BASE_URL;

const router = createBrowserRouter([
    {
        path: `${basename}`,
        element: <App />,
        children: [
            {
                path: `${basename}`,
                element: <Home />,
            },
            {
                path: `${basename}/bike-shop`,
                element: <BikeShop />,
            },
            {
                path: `${basename}/alberta-traffic-safety-act`,
                element: <AlbertaTrafficSafetyAct />,
            },
            {
                path: `${basename}/help-center`,
                element: <HelpCenter />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

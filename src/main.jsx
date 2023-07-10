import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "./assets/Container/Container.jsx";
import Root from "./assets/Root/Root.jsx";
import NotFound from "./assets/NotFound/NotFound.jsx";
import Order from "./assets/Order/Order.jsx";
import Inventory from "./assets/Inventory/Inventory.jsx";
import Login from "./assets/Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Container></Container>,
      },
      {
        path: "/shop",
        element:<Container></Container>
      },
      {
        path: "/order",
        element:<Order></Order>
      },
      {
        path: '/inventory',
        element:<Inventory></Inventory>
      },
      {
        path: "/login",
        element:<Login></Login>
      },

      {
        path: "*",
        element:<NotFound></NotFound>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

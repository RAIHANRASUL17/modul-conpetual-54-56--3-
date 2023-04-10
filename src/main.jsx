import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// react-router
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import loaderWithFetch from "./components/Loader/LoaderCustom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: 'shop',
        element: <Shop></Shop>,
        loader: ()=>fetch('products.json')
      },
      {
        path: 'cart',
        element: <Cart></Cart>,
        loader: loaderWithFetch,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

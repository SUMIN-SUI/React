import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Product from "./routes/Product";
import NotFound from "./routes/NotFound";
import ProductInfo from "./routes/ProductInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/product", element: <Product /> },
      { path: "/product/:productId", element: <ProductInfo /> },
    ],
  },
]);

const App_router = () => {
  return <RouterProvider router={router} />;
};

export default App_router;

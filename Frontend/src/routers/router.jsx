import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App.jsx";
  import Home from "../home/Home";
  import Shop from "../shop/Shop";
import Blog from "../components/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
           path: '/',
           element:  <Home/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/blog",
            element: <Blog/>
        }
      ]
    },
  ]);

  export default router;
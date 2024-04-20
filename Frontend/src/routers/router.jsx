import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App.jsx";
  import Home from "../home/Home";
  import Shop from "../shop/Shop";
import Blog from "../components/Blog";
import About from "../components/About.jsx";
import SingleBook from "../shop/SingleBook.jsx";

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
        },{
          path: "/book/:id",
          element: <SingleBook/>,
          loader: ({params})=> fetch(`https://localhost:5000/book/${params.id}`)
        }
      ]
    },
  ]);

  export default router;
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from '../pages/Login'
import Search from '../pages/Search'
import Home from '../pages/Home'
import NewPalNeed from '../pages/NewPalNeed'
import PalNeed from "../pages/PalNeed";

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/search",
      element: <Search/>,
    },
    {
      path: "/",
      element: <Home/>,
     
    },
    
    {
      path: "/newPalNeed",
      element: <NewPalNeed/>,
    },
    {
      path: "/need/:needId",
      element: <PalNeed/>,
    }
  ]);

  export default router
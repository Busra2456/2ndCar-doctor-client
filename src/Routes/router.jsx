import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
      {
        path: "/",
        element:<Main></Main>,
        children:[
            {
                  path:'/',
                  element:<Home></Home>
            },
            {
              path:'/Login',
              element:<Login></Login>
            },
            {
              path:'/SignUp',
              element:<SignUp></SignUp>
            },
        ]
      },
    ]);
    export default router;
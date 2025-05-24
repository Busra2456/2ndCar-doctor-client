import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Main/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookService from "../Pages/Home/BookService/BookService";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
            {
              path:'book/:id',
              element:<BookService></BookService>,
              loader:({params}) => fetch(`http://localhost:5000/doctors/${params.id}`)
            },
            {
              path: 'bookings',
              element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
      },
    ]);
    export default router;
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import BookService from "../pages/BookService";
import Bookings from "../pages/Bookings";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUP from "../pages/SignUP";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUP />,
      },
      {
        path: "/book/:id",
        loader: (params) =>
          fetch(
            `https://car-doctor-server-dusky-nine.vercel.app/services/${params.params.id}`
          ),
        element: (
          <PrivateRoute>
            <BookService />
          </PrivateRoute>
        ),
      },
      {
        path: "/checkout/:id",
        loader: (params) =>
          fetch(
            `https://car-doctor-server-dusky-nine.vercel.app/services/${params.params.id}`
          ),
        element: <Checkout />,
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddNew from "../pages/AddNew/AddNew";
import UpdateExisting from "../pages/UpdateExisting/UpdateExisting";
import CoffeeDetails from "../pages/CoffeeDetails/CoffeeDetails";
import Login from "../pages/LoginSignup/Login";
import Register from "../pages/LoginSignup/Register";
import Users from "../pages/Users/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffee'),
            },
            {
                path: "/addNew",
                element: <AddNew />,
            },
            {
                path: "/updateExisting/:id",
                element: <UpdateExisting />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: "/coffeeDetails/:id",
                element: <CoffeeDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
            },
            {
                path: '/users',
                element: <Users />,
                loader: () => fetch('http://localhost:5000/user'),
            },
            {
                path: '/profile',
                element: <div className="my-24">Profile coming soon</div>,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/login',
                element: <Login />,
            },
        ]
    }
]);

export default router;
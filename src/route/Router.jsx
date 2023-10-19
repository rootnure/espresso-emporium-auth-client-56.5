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
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('https://espresso-emporium-auth-server-rootnure-eyprq720g.vercel.app/coffee'),
            },
            {
                path: "/addNew",
                element: <AddNew />,
            },
            {
                path: "/updateExisting/:id",
                element: <UpdateExisting />,
                loader: ({ params }) => fetch(`https://espresso-emporium-auth-server-rootnure-eyprq720g.vercel.app/coffee/${params.id}`)
            },
            {
                path: "/coffeeDetails/:id",
                element: <CoffeeDetails />,
                loader: ({ params }) => fetch(`https://espresso-emporium-auth-server-rootnure-eyprq720g.vercel.app/coffee/${params.id}`),
            },
            {
                path: '/users',
                element: <Users />,
                loader: () => fetch('https://espresso-emporium-auth-server-rootnure-eyprq720g.vercel.app/user'),
            },
            {
                path: '/profile',
                element: <Profile />,
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
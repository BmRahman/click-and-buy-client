import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Blog from '../Components/Blog/Blog';
import Main from './../Layout/Main';
import Login from './../Components/Login/Login';
import Register from "../Components/Register/Register";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/allUsers',
                element: <AllUsers></AllUsers>
            }
        ]
    }
])
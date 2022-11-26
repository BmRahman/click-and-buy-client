import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Blog from '../Components/Blog/Blog';
import Main from './../Layout/Main';
import Login from './../Components/Login/Login';
import Register from "../Components/Register/Register";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import AddProduct from "../Components/Dashboard/AddProduct/AddProduct";
import Apple from "../Components/Brands/Apple/Apple";
import Samsung from "../Components/Brands/Samsung/Samsung";
import Xiaomi from './../Components/Brands/Xiaomi/Xiaomi';
import Oneplus from './../Components/Brands/Oneplus/Oneplus';



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
            },
            {
                path: '/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/apple',
                element: <Apple></Apple>,
                loader: () => fetch('http://localhost:5000/products/apple')
            },
            {
                path: '/samsung',
                element: <Samsung></Samsung>,
                loader: () => fetch('http://localhost:5000/products/sumsung')
            },
            {
                path: '/xiaomi',
                element: <Xiaomi></Xiaomi>,
                loader: () => fetch('http://localhost:5000/products/xiaomi')
            },
            {
                path: '/oneplus',
                element: <Oneplus></Oneplus>,
                loader: () => fetch('http://localhost:5000/products/oneplus')
            }
        ]
    }
])
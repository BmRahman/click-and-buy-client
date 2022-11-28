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
import MyOrders from "../Components/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Components/Dashboard/MyProducts/MyProducts";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import AllSeller from "../Components/Dashboard/All Seller/AllSeller";
import AllBuyer from "../Components/Dashboard/AllBuyer/AllBuyer";



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
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/allsellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/allbuyers',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },         
            {
                path: '/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/apple',
                element: <PrivateRoute><Apple></Apple></PrivateRoute>,
                loader: () => fetch('https://click-server.vercel.app/products/apple')
            },
            {
                path: '/samsung',
                element: <PrivateRoute><Samsung></Samsung></PrivateRoute>,
                loader: () => fetch('https://click-server.vercel.app/products/sumsung')
            },
            {
                path: '/xiaomi',
                element: <PrivateRoute><Xiaomi></Xiaomi></PrivateRoute>,
                loader: () => fetch('https://click-server.vercel.app/products/xiaomi')
            },
            {
                path: '/oneplus',
                element: <PrivateRoute><Oneplus></Oneplus></PrivateRoute>,
                loader: () => fetch('https://click-server.vercel.app/products/oneplus')
            }
            
        ]
    }
])
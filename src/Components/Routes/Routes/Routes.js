import AllHomes from "../../Pages/AllHomes/AllHomes";
import Login from "../../Pages/Login/Login";
import MyOrder from "../../Pages/MyOrder/MyOrder";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: LayOut } = require("../../LayOut/LayOut");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut></LayOut>,
        children: [
            {
                path: '/',
                element: <AllHomes></AllHomes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myorder',
                element: <PrivateRoute> <MyOrder></MyOrder></PrivateRoute>
            }
        ]
    }
])
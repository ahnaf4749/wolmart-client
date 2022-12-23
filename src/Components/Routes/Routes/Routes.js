import AllHomes from "../../Pages/AllHomes/AllHomes";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

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
            }
        ]
    }
])
import AllHomes from "../../Pages/AllHomes/AllHomes";

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
            }
        ]
    }
])
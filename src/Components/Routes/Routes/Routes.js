const { createBrowserRouter } = require("react-router-dom");
const { default: LayOut } = require("../../LayOut/LayOut");
const { default: Home } = require("../../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut></LayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
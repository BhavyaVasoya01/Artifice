import {  createHashRouter, RouterProvider } from "react-router-dom"
import Layout from "../Layout"
import Home from "../features/Home/Home"
import AboutUs from '../features/AboutUs/AboutUs'
import ContactUS from "../features/ContactUs/ContactUs"
import Branding from "../features/Services/Branding"
import Work from "../features/Work/Work"

const router = createHashRouter([
    {
        path: "",
        element: <Layout />,
        children:[
            {
                path: "",
                element : <Home/>
            },
            {
                path: "/",
                element : <Home/>
            },

            {
                path: "/about",  // Add the route for About Us
                element: <AboutUs />,
            },

            {
                path: "/contact",  // Add the route for About Us
                element: <ContactUS />,
            },
            {
                path: "/contactus",  // Add the route for About Us
                element: <ContactUS />,
            },
            {
                path: "/branding",  // Add the route for About Us
                element: <Branding />,
            },
             {
                path: "/work",  // Add the route for About Us
                element: <Work />,
            },
        ]
    }
])


const Routes = () => {
    return <RouterProvider router={router}/>
}

export default Routes
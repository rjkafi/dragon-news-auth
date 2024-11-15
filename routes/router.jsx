import { createBrowserRouter, Navigate} from "react-router-dom";
import HomeLayout from "../src/layouts/HomeLayout";
import CategoryNews from "../src/pages/CategoryNews";
import AuthLayout from "../src/layouts/AuthLayout";


const router=createBrowserRouter([

    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        children:[
            {
             path:"",
             element:<Navigate to={"/category/01"}></Navigate>
            },
            {
                path:'/category/:id',
                element:<CategoryNews></CategoryNews>,
                loader: ({params}) => 
                    fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
             }
        ]
    },
    {
        path:'/news',
        element:<div>news </div>
    },{
        path:'auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<h3>Login page</h3>
            },
            {
                path:'/auth/register',
                element:<h3>Register page</h3>
            }
        ]
    },{
        path:"*",
        element:<h4>Eroore Page</h4> 
    }

]);

export default router;
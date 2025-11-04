import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout/RootLayout";
import Loader from "../Componets/Loader/Loader"

 export const router = createBrowserRouter([{

    path:'/',
    element:<RootLayout></RootLayout>,
    hydrateFallbackElement:<Loader></Loader>
    
    
 }])
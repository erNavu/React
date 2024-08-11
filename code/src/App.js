import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet, Route, createRoutesFromElements } from 'react-router-dom'

import About from './pages/About';
import ContactUs from "./pages/ContactUs";
import ErrorPage from './pages/ErrorPage';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from './components/Header'
import Login from "./pages/Login";
import RestaurantMenu from "./components/RestaurantMenu";


// const User = () => {
//     return <h1>Hi I am User page</h1>
// }

// const AboutLayout = () => {
//     return <Outlet />
// }

const App = () => {
    return (<div className="app">
        <Header />
        <Outlet />
        <Footer />
    </div>)
}

// appRouter is same as jsxRouter . only syntax difference

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: < App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            // {
            //     path: "/about",
            //     element: <AboutLayout />,
            //     children: [
            //         {
            //             path: "/about",
            //             element: <About />
            //         },
            //         {
            //             path: "/about/user",
            //             element: <User />
            //         }
            //     ]
            // },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/restaurant/:res",
                element: <RestaurantMenu />
            }
        ]
    }
])

// const jsxRouter = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<App />}>
//             <Route path="/" element={<Home />} />
//             <Route path="contact" element={<ContactUs />} />
//             <Route path="about" element={<AboutLayout />} >
//             <Route path="" element={<About />} />
//                 <Route path="user" element={<User />}></Route>
//             </Route>
//             <Route path="login" element={<Login />} />
//             <Route path="restaurant/:res" element={<RestaurantMenu />} />

//         </Route>
//     )
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
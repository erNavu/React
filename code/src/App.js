import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

import About from './pages/About';
import ContactUs from "./pages/ContactUs";
import ErrorPage from './pages/ErrorPage';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Header from './components/Header'
import Login from "./pages/Login";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserProvider } from "./utils/UserContext";
import UserProfile from "./pages/UserProfile";

const Grocery = lazy(() => import("./pages/Grocery"))

const App = () => {
    return (<div className="m-4">
        <UserProvider >
            <Header />
            <div className="mb-20">
                <Outlet />
            </div>
            <Footer />
        </UserProvider>
    </div>)
}

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
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: '/profile',
                element: <UserProfile />
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<div> Loading grocery...</div >}>
                        <Grocery />
                    </Suspense>)
            },
            {
                path: "/restaurant/:res",
                element: <RestaurantMenu />
            }
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
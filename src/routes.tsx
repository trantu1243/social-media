import { Navigate } from "react-router-dom";

import AuthLayout from "./layouts/auth";
import Login from "./views/auth/login";
import Register from "./views/auth/register";

import PortalLayout from "./layouts/portal";
import Home from "./views/portal/home";

const routes = [
    {
      path: "/",
      element: <Navigate to="/portal/home" replace/>,
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
              path: "login",
              element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
              path: "/auth",
              element: <Navigate to="/auth/login" replace/>,
            },
          ],
    },
    {
      path: "portal",
      element: <PortalLayout />,
      children: [
        {
          path: "home",
          element: <Home />
        },
        {
          path: "/portal",
          element: <Navigate to="/portal/home" replace/>,
        },
      ]
    }
]


export default routes;
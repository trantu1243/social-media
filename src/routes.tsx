import { Navigate } from "react-router-dom";

import AuthLayout from "./layouts/auth";
import Login from "./views/auth/login";
import Register from "./views/auth/register";

import PortalLayout from "./layouts/portal";
import Home from "./views/portal/home";
import UserPage from "./views/portal/userPage";
import ErrorPage from "./error-page";
import PostPage from "./views/portal/postPage";
import Secret from "./views/portal/secret";
import Setting from "./views/portal/setting";
import UserInformation from "./views/portal/setting/account-information";

const routes = [
    {
      path: "/",
      element: <Navigate to="/portal/home" replace/>,
      errorElement: <ErrorPage />
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
          path: "secret",
          element: <Secret />
        },
        {
          path: "user/:id",
          element: <UserPage />,
        },
        {
          path: "post/:id",
          element: <PostPage />,
        },
        {
          path: "setting",
          element: <Setting />
        },
        {
          path: "setting/user-information",
          element: <UserInformation />
        },
        {
          path: "/portal",
          element: <Navigate to="/portal/home" replace/>,
        },
      ]
    }
]


export default routes;
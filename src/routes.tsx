import AuthLayout from "./layouts/auth";
import Login from "./views/auth/login";
import Register from "./views/auth/register";

const routes = [
    {
      path: "/",
      element: <div>Hello world!</div>,
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
          ],
    },
]


export default routes;
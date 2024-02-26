import { HelloPage, SecondPage } from "@pages/index";
import { createBrowserRouter, Outlet } from "react-router-dom";

import { ProtectedRoute } from "./ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <HelloPage /> },
      {
        path: "second",
        element: (
          <ProtectedRoute user={true} redirectPath="/">
            <SecondPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;

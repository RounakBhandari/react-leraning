import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import RootLayout from "./Pages/RootLayout";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Homepage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

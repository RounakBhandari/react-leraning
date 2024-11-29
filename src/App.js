import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import RootLayout from "./Pages/RootLayout";
import AddForm from "./Pages/AddPage";
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
        {
          path: "/addform",
          element: <AddForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

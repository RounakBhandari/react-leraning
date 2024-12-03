import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import RootLayout from "./Pages/RootLayout";
import AddForm from "./Pages/AddPage";
import UpdateForm from "./Pages/UpdateForm";
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
          path: "addform",
          element: <AddForm />,
        },
        {
          path: "updateform/:id",
          element: <UpdateForm />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

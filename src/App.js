import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import RootLayout from "./Pages/RootLayout";
import Categories from "./Pages/Categories";
import ListItems from "./Pages/ListItems";
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
          path: "categories",
          element: <Categories />,
        },
        {
          path: "categories/:category",
          element: <ListItems />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

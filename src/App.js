import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import RootLayout from "./Pages/RootLayout";
import Categories from "./Pages/Categories";
import ListItems from "./Pages/ListItems";
import MealDescription from "./Pages/MealDescription";
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
        {
          path: "detail/:id",
          element: <MealDescription />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

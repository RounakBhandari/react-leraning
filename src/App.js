import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Homepage from "./Pages/Homepage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import About from "./pages/about";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Readmore from "./pages/Readmore";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
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
          path: "recipie/:id",
          element: <Readmore />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;

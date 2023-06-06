import React, { Children, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
// This is known as Name import
import { Header } from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Help } from "./components/Help";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestourantMenu from "./components/RestourantMenu";
// import SideNav from "./components/SideNav";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Profile from "./components/Profile";
import FAQ from "./components/FAQ";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";
// If i have to import multiple things
// import Title , {Header , Header2} from "./components/Header";
// import * as obj from "./components/Header";
// Header = obj.Header

// this is the syntax of lazy loading ie on demand loading
const Instamart = lazy(() => import("./components/Instamart"));
import store from "./utils/store";
import { Provider } from "react-redux";

const AppLayout = () => (
  <Provider store={store}>
    <Header />
    <Outlet />
    <Footer />
  </Provider>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/Home",
        element: <Body />,
      },
      {
        path: "/Help",
        element: <Help />,
        children: [
          {
            path: "/Help",
            element: <FAQ />,
            // Nested routing
          },
          {
            path: "Profile",
            element: <Profile />,
            // Nested routing
          },
          {
            path: "FAQ",
            element: <FAQ />,
            // Nested routing
          },
          {
            path: "Contact",
            element: <Contact />,
            // Nested routing
          },
        ],
      },

      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Restourant/:id",
        element: <RestourantMenu />,
      },
      {
        path: "/Instamart",
        element: (
          <Suspense>
            <Instamart />,
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);\

root.render(<RouterProvider router={appRouter} />);
// here routerProvider is taking a prop name appRouter,
// that means root will render according to the appRouter value

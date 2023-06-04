import React from "react";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from "./Profile";
import SideNav from "./SideNav";
import Contact from "./Contact";
import FAQ from "./FAQ";
import Error from "./Error";

export const Help = () => {
  return (
    <div className="bg-[rgb(55,113,142)] ">
      <div className="font-bold text-3xl text-white ml-[90px] py-[20px] ">
        Help & Support
      </div>
      <div className="About w-[85%] min-h-screen h-auto display-size flex m-auto bg-white max-md:flex-col">
        <SideNav />
        <Outlet />
      </div>
    </div>
  );
};

const appRouter2 = createBrowserRouter([
  {
    path: "/Help",
    element: <Help />,
    errorElement: <Error />,
    children: [
      {
        path: "/Help",
        element: <Help />,
      },
      {
        path: "FAQ",
        element: <FAQ />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={appRouter2} />;
}

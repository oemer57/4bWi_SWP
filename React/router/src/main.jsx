import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";
import ButtonContainer from "./components/ButtonTask/ButtonContainer";
import ListeContainer from "./components/ListTask/ListeContainer";
import Links from "./components/Links";

const router = createBrowserRouter([
  {
    path: "/People",
    element: <PeopleContainer />,
  },
  {
    path: "/List",
    element: <ListeContainer />,
  },
  {
    path: "/Card",
    element: <CardContainer />,
  },
  {
    path: "/Button",
    element: <ButtonContainer />,
  },
  {
    path: "/Links",
    element: <Links />,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);

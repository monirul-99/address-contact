import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ContactAdd from "../Pages/ContactAdd/ContactAdd";
import ManageContact from "../Pages/ManageContact/ManageContact";
import SearchContact from "../Pages/SearchContact/SearchContact";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <ContactAdd />,
      },
      {
        path: "/contactAdd",
        element: <ContactAdd />,
      },
      {
        path: "/contactSearch",
        element: <SearchContact />,
      },
      {
        path: "/manageContact",
        element: <ManageContact />,
      },
    ],
  },
]);

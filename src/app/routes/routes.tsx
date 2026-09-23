import { ScrollRestoration } from "react-router-dom";
import { ROUTE_URL } from "../core/constants/coreUrl";
import Home from "../../pages/Home/Home";

export const appRoutes = [
  {
    element: (
      <>
        <ScrollRestoration />
        <Home />
      </>
    ),
    path: ROUTE_URL.home,
  },
];

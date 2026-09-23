import { createBrowserRouter } from "react-router-dom";
import { appRoutes } from "./routes";

const MainRoutes = createBrowserRouter([...appRoutes]);

export default MainRoutes;

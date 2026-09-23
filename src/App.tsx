import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./app/routes";

function App() {
  return (
    <Suspense
      fallback={
        <div className="grid min-h-screen place-items-center bg-zinc-950 text-sm text-zinc-500">
          Loading…
        </div>
      }
    >
      <RouterProvider router={MainRoutes} />
    </Suspense>
  );
}

export default App;

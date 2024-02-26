import "./App.css";

import router from "@router/index";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <h1 className="bg-primary">Hello, Vite + React + TS + TailwindCSS</h1>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

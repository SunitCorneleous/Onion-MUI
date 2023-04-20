import { RouterProvider } from "react-router-dom";
import "./App.css";

import { router } from "./router/Routes";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

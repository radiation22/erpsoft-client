import { RouterProvider } from "react-router-dom";
import { router } from "./layout/Routes";
import "./App.css";

function App() {
  // const socket = socketIO.connect("https://nirapode-server.vercel.app");
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

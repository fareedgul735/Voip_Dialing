import { RouterProvider } from "react-router";
import "./App.css";
import routes from "./app/Routing/VoipRouting";

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
import { RouterProvider } from "react-router";
import routes from "./app/Routing/VoipRouting";

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;

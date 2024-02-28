import "./App.css";

import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import PipeLine from "./components/PipeLine";
import Explore from "./components/Explore";
import Settings from "./components/Settings";
import Support from "./components/Support";

import Home from "./components/Home";


 export const router = createBrowserRouter([
   {
     path: "/",
     element: <Home />,
     children: [
       {
         path: "/",
         element: <PipeLine />,
       },
       {
         path: "/pipeline",
         element: <PipeLine />,
       },
       {
         path: "/explore",
         element: <Explore />,
       },
       {
         path: "/settings",
         element: <Settings />,
       },
       {
         path: "/support",
         element: <Support />,
       },
     ],
   },
 ]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;

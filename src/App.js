import "./App.css";

import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import PipeLine from "./components/PipeLine";
import Explore from "./components/Explore";
import Settings from "./components/Settings";
import Support from "./components/Support";

import Home from "./components/Home";
import { createContext, useState } from "react";

  export const Elements = createContext();

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

  const initialNodes = [
    {
      id: "1",
      type: "input",
      data: { label: "Input Node" },
      position: { x: 50, y: 70 },
    },
    { id: "2", data: { label: "Intermediate" }, position: { x: 300, y: 70 } },
  ];

  const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

function App() {
  const [onodes, setONodes] = useState(initialNodes);
  const [oedges, setOEdges] = useState(initialEdges);
  return (
    <Elements.Provider
      value={{
        onodes : onodes,
        oedges : oedges,
        setONodes : setONodes,
        setOEdges : setOEdges,
      }}
    >
      <RouterProvider router={router} />;
    </Elements.Provider>
  );
  
}

export default App;

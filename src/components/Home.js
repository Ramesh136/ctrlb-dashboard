
import { useState } from "react";
// import Login from "./components/Login";
import SideBar from "./SideBar";
import { Outlet, useNavigate } from "react-router-dom";

import { history } from "../utils/helper";
import Login from "./Login";


function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  history.navigation = useNavigate();
  return !isLoggedIn ? (
    <Login setIsLoggedIn={setIsLoggedIn} />
  ) : (
    <div className="flex">
      <div className="fixed inset-y-0 z-50 h-full w-64 flex-col">
        <SideBar />
      </div>
      <div className="relative ml-40 p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;

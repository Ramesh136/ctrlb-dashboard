import React, { useState } from "react";
import logo from "../cltrlb-logos/ctrlB-logos_black.png";
import { Compass, GitBranch, HandHelping, Settings2 } from "lucide-react";
import { history } from "../utils/helper";

const menuList = [
  {
    id: 0,
    name: "Pipeline",
    logo: GitBranch,
    path: "/pipeline",
  },
  {
    id: 1,
    name: "Explore",
    logo: Compass,
    path: "/explore",
  },
  {
    id: 2,
    name: "Settings",
    logo: Settings2,
    path: "/settings",
  },
  {
    id: 3,
    name: "Support",
    logo: HandHelping,
    path: "/support",
  },
];

const SideBar = () => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="h-full w-40 border-r-2">
      <div className="border-b" onClick={() => {
        setCurrent(0)
        history.navigation("/")}}>
        <img src={logo} className="w-24 cursor-pointer" alt="logo"/>
      </div>

      {menuList.map((key, index) => {
        return (
          <div
            className={
              "flex cursor-pointer p-2 pb-5 hover:bg-slate-200 " +
              (current === index ? "text-green-600" : null)
            }
            onClick={() => {
              history.navigation(key.path);
              setCurrent(index);
            }}
            key={key.id}
          >
            <key.logo className="w-5" />
            <h2 className="ml-4">{key.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;

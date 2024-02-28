import React, { useState } from "react";
import Yaml from "./Yaml";
import OverView from "./OverView";

const Modal = ({dialogueBox , setDialogueBox}) => {

  const [toggle , setToggle] = useState(true)
  let active = ''
  if(toggle){
    active = "text-green-600"
  }
  return (
    <>
      {dialogueBox ? (
        <>
          <div className="fixed inset-0 z-50 flex w-5/6 overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative mx-auto my-6 w-auto max-w-3xl">
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                <div className="flex w-full items-start justify-between rounded-t border-b border-solid border-gray-300 p-5 ">
                  <h3 className="font=semibold text-3xl">prod_logstosh</h3>
                  <button
                    className="float-right border-0 bg-transparent text-black"
                    onClick={() => setDialogueBox(false)}
                  >
                    <span className="opacity-7 block h-6 w-6 rounded-full bg-gray-400 text-xl text-black">
                      X
                    </span>
                  </button>
                </div>
                <div className=" flex w-full space-x-12 border-y p-4">
                  <h2
                    className={"cursor-pointer "+ (toggle ?"text-green-600" : null)}
                    onClick={() => setToggle(true)}
                  >
                    Overview
                  </h2>
                  <h2
                    className={"cursor-pointer "+ (!toggle ? "text-green-600" : null)}
                    onClick={() => setToggle(false)}
                  >
                    {" "}
                    YAML
                  </h2>
                </div>

                {toggle ? <OverView /> : <Yaml />}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;

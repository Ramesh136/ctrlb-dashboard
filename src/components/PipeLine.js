import React, { useState } from 'react'
// import Graphic from './Graphic'
import Graphic2 from "./Graphic2";
import { GitBranch } from 'lucide-react';
import logo from "../cltrlb-logos/spikes.png";
import DailogueBox from './Modal';

const PipeLine = () => {

    const [dialogueBox , setDialogueBox] = useState(false)
  return (
    <div>
      <h1 className="ml-5 mt-4 w-full text-3xl">DashBoard</h1>
      <div className="ml-10 mt-7 flex w-2/3 space-x-14 border-y-2 border-gray-400">
        <div className="ml-4">
          <h2>Incoming Bytes</h2>
          <h2 className="text-center">0</h2>
        </div>
        <div className="border-r-2 border-gray-400 pr-16">
          <h2>Incoming Events</h2>
          <h2 className="text-center">0</h2>
        </div>
        <div>
          <h2>Outgoing Bytes</h2>
          <h2 className="text-center">0</h2>
        </div>
        <div>
          <h2>Outgoing Bytes</h2>
          <h2 className="text-center">0</h2>
        </div>
      </div>
      <div className="mt-6">
        <Graphic2 />
      </div>
      <div className="w-full">
        <h2 className="border-b-2 border-gray-400 py-2 pl-2 text-2xl">
          Pipelines
        </h2>
        <div className="flex justify-between">
          <input
            className="mt-3 w-auto rounded border border-black px-2"
            placeholder="Search"
            type="text"
          />
          <button className="mr-3 mt-3 rounded bg-slate-500 px-4 py-1 text-white">
            + New Pipeline
          </button>
        </div>
        <div className="mt-3 flex border-2 p-1">
          <div className="flex border-r-2 pr-4 cursor-pointer hover:underline pt-2" 
           onClick={()=>{
            setDialogueBox(true)
            console.log(dialogueBox)
            }}
           >
            <GitBranch className="w-4" />
            <h2 className="px-2">prod_logstosh</h2>
          </div>
          <DailogueBox dialogueBox={dialogueBox} setDialogueBox={setDialogueBox}/>
          <div className="text-s  ml-5 flex w-auto  space-x-4 border-r-2 pr-4">
            <div className="ml-4">
              <h2>Incoming Bytes</h2>
              <h2 className="text-center">1GB</h2>
            </div>
            <div className="pr-6">
              <h2>Incoming Events</h2>
              <h2 className="text-center">1M</h2>
            </div>
            <div>
              <h2>Outgoing Bytes</h2>
              <h2 className="text-center">10MB</h2>
            </div>
            <div>
              <h2>Outgoing Bytes</h2>
              <h2 className="text-center">180K</h2>
            </div>
          </div>
          <div><img src={logo} className='ml-5 h-12 w-full'/></div>
        </div>
      </div>
    </div>
  );
}

export default PipeLine
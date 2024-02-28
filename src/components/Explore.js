import React from 'react'

const Explore = () => {
  return (
    <div className="mt-4 pl-2">
      <h2 className="pt-2 text-3xl">Datasets</h2>
      <div className="flex justify-between">
        <input
          className="mt-3 w-auto rounded border border-black px-2"
          placeholder="🔍 Search"
          type="text"
        />
        <button className="mr-3 mt-3 rounded bg-slate-500 px-4 py-1 text-white">
          + New Dataset
        </button>
      </div>
      <div className="mt-3 flex border-2 p-1">
        <div className="flex cursor-pointer flex-row justify-between p-2 pr-4 ">
          <h2 className="">Dataset Test 1</h2>
          <div className="ml-96 items-center pl-80">
            <button className=" mx-2 rounded bg-slate-500 px-4 py-1 text-white">
              Query
            </button>
            <button className=" rounded bg-slate-500 px-4 py-1 text-white">
              Live Tail
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 flex border-2 p-1">
        <div className="flex cursor-pointer justify-between p-2 pr-4">
          <h2 className="">Dataset Test 2</h2>
          <div className="ml-96 items-center pl-80">
            <button className=" mx-2 rounded bg-slate-500 px-4 py-1 text-white">
              Query
            </button>
            <button className=" rounded bg-slate-500 px-4 py-1 text-white">
              Live Tail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore
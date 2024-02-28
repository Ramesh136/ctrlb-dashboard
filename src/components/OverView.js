import React from 'react'

const OverView = () => {
  return (
    <div>
      <div className="mx-5 mt-7 flex space-x-14 border-y-2 border-gray-400">
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
      <div className="h-60 w-full p-3">
        <div className="m-3 h-40 border-2 p-3">
          <h2 className="text-gray-400">No Data</h2>
        </div>
      </div>
    </div>
  );
}

export default OverView
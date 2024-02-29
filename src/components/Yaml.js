import { MoreVertical } from 'lucide-react';
import React, { useContext } from 'react'

const Yaml = () => {

  return (
    <div className="h-60">
      <div className='ml-72'>
        <h2 className="ml-96 pr-4 cursor-pointer pt-2"><MoreVertical /></h2>
      </div>

      <p contentEditable="true" className=" p-2">
        version:vs <br />
        settings : <br />
        {""}tag: prod_test <br /> log: <br /> level:info
      </p>
    </div>
  );
}

export default Yaml
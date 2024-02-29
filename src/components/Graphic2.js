import React, { useState, useCallback, useContext, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "react-flow-renderer";
import { Elements } from "../App";


const getNodeId = () => `randomnode_${+new Date()}`;

const FlowExample = () => {
  const el = useContext(Elements)
  const [wrong ,setWrong] = useState(false)
  const [nodes, setNodes, onNodesChange] = useNodesState(el.onodes);
  const [edges , setEdges] = useEdgesState(el.oedges);
  const [nodeName, setNodeName] = useState("");

  useEffect(()=>{
    el.setONodes(nodes);
    el.setOEdges(edges)
  },[nodes ,edges])

  const addEdge = useCallback(({ source, target }) => {
    setEdges((edges) => {
      return [
        ...edges,
        {
          id: Math.random(),
          source,
          target,
        },
      ];
    });
  }, []);

  const onAdd = useCallback((e) => {
    if(nodeName===""){
      setWrong(true)
      setTimeout(()=>setWrong(false) ,2000)
      return
    }
    const newNode = {
      id: getNodeId(),
      data: { label: `${nodeName}` },
      position: {
        x: 0,
        y: 0 + (nodes.length + 1) * 20,
      },
      type: e.target.innerText === "Add Source Node" ? "input" : "default",
    };
    setNodes((nds) => nds.concat(newNode));
    
  }, [nodes, setNodes, nodeName]);

  return (
    <div>
      <div style={{ width: "100%", height: "40vh" }} className="border-2 border-gray-400 rounded">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onConnect={addEdge}
        />
      </div>
      <div className="space-x-2 p-2 mt-2">
        
        <input
          className="w-auto border border-black px-2 py-1 rounded"
          placeholder="node name"
          type="text"
          onChange={(e) => {
            setNodeName(e.target.value);
          }}
        />
        <button
          className="rounded bg-slate-500 px-4 py-1 text-white"
          onClick={(e) => onAdd(e)}
        >
          Add Source Node
        </button>
        <button
          className="rounded bg-slate-500 px-4 py-1 text-white"
          onClick={(e) => onAdd(e)}
        >
          Add Destination Node
        </button>
        {wrong ?<h2 className="inline-block text-red-600">Enter Node name</h2> : null}
      </div>
    </div>
  );
};

export default () => (
  <ReactFlowProvider>
    <FlowExample />
  </ReactFlowProvider>
);
